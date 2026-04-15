const User = require("../models/User");
const OTP = require("../models/OTP");

const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const { hashPassword, comparePassword } = require("../utils/hash.utils");
const { generateAccessToken, generateRefreshToken, verifyToken } = require("../utils/jwt.utils");
const { sendVerificationEmail, sendPasswordResetEmail, sendOTP } = require("../utils/email.utils");

const crypto = require("crypto");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


const registerInit = async (req, res, next) => {
    try {
        let { email, password, displayName } = req.body;

        if ([email, password, displayName].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }

        email = email.trim().toLowerCase();
        displayName = displayName.trim();

        const existedUser = await User.findOne({ email });
        if (existedUser) {
            throw new ApiError(409, "User with email already exists");
        }

        const hashedPassword = await hashPassword(password);
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await OTP.findOneAndUpdate(
            { email },
            { email, passwordHash: hashedPassword, displayName, otp, createdAt: Date.now() },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        await sendOTP(email, otp);

        return res.status(200).json(
            new ApiResponse(200, { email }, "Verification code sent to your email.")
        );
    } catch (error) {
        next(error);
    }
};

const registerVerify = async (req, res, next) => {
    try {
        let { email, otp } = req.body;

        if (!email || !otp) {
            throw new ApiError(400, "Email and OTP are required");
        }

        email = email.trim().toLowerCase();
        otp = otp.trim();

        const otpRecord = await OTP.findOne({ email, otp });

        if (!otpRecord) {
            throw new ApiError(400, "Invalid or expired OTP");
        }

        const user = await User.create({
            email: otpRecord.email,
            passwordHash: otpRecord.passwordHash,
            displayName: otpRecord.displayName,
            isVerified: true,
        });

        await OTP.deleteOne({ email });

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(201, { user, accessToken, refreshToken }, "User registered and verified successfully"));
    } catch (error) {
        next(error);
    }
};


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new ApiError(400, "Email and password are required");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(404, "User does not exist");
        }

        if (!user.isVerified) {
            throw new ApiError(403, "Please verify your email before logging in");
        }

        if (user.isBanned) {
            throw new ApiError(403, "Your account has been banned");
        }

        const isPasswordValid = await comparePassword(password, user.passwordHash);

        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid user credentials");
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.lastLoginAt = new Date();
        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, { user: user.toObject({ transform: (doc, ret) => { delete ret.passwordHash; return ret; } }), accessToken, refreshToken }, "User logged in successfully"));
    } catch (error) {
        next(error);
    }
};

const googleOauth = async (req, res, next) => {
    try {
        let { token } = req.body; // ID Token from frontend Google login

        // Also check Authorization header
        if (!token && req.headers.authorization) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            throw new ApiError(400, "Google token is required");
        }

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();

        if (!payload || !payload.email) {
            throw new ApiError(401, "Invalid Google token payload");
        }

        let user = await User.findOne({ email: payload.email });

        if (!user) {
            user = await User.create({
                email: payload.email,
                displayName: payload.name,
                avatarUrl: payload.picture,
                oauthProvider: "google",
                oauthId: payload.sub,
                isVerified: true,
                passwordHash: crypto.randomBytes(16).toString("hex"), // Dummy password for OAuth users
            });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.lastLoginAt = new Date();
        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        user: user.toObject({
                            transform: (doc, ret) => {
                                delete ret.passwordHash;
                                return ret;
                            },
                        }),
                        accessToken,
                        refreshToken,
                    },
                    "Google login successful"
                )
            );

    } catch (error) {
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "User logged out successfully"));
    } catch (error) {
        next(error);
    }
};

const refresh = async (req, res, next) => {
    try {
        const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

        if (!incomingRefreshToken) {
            throw new ApiError(401, "Refresh token required");
        }

        // Verify token
        const decodedToken = verifyToken(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        if (!decodedToken) {
            throw new ApiError(401, "Invalid or expired refresh token");
        }


        const user = await User.findById(decodedToken?._id);

        if (!user) {
            throw new ApiError(401, "Invalid refresh token");
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new ApiResponse(200, { accessToken, refreshToken }, "Access token refreshed"));
    } catch (error) {
        next(new ApiError(401, error?.message || "Invalid refresh token"));
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const resetToken = crypto.randomBytes(20).toString("hex");
        user.passwordResetToken = resetToken;
        user.passwordResetExpiry = Date.now() + 3600000; // 1 hour
        await user.save({ validateBeforeSave: false });

        // await sendPasswordResetEmail(email, resetToken);

        return res.status(200).json(new ApiResponse(200, { resetToken }, "Password reset token generated"));
    } catch (error) {
        next(error);
    }
};

const resetPassword = async (req, res, next) => {
    try {
        const { token, password } = req.body;
        const user = await User.findOne({
            passwordResetToken: token,
            passwordResetExpiry: { $gt: Date.now() },
        });

        if (!user) {
            throw new ApiError(400, "Invalid or expired reset token");
        }

        user.passwordHash = await hashPassword(password);
        user.passwordResetToken = undefined;
        user.passwordResetExpiry = undefined;
        await user.save({ validateBeforeSave: false });

        return res.status(200).json(new ApiResponse(200, {}, "Password reset successful"));
    } catch (error) {
        next(error);
    }
};

const verifyEmail = async (req, res, next) => {
    try {
        const { token } = req.query;
        const user = await User.findOne({ emailVerifyToken: token });

        if (!user) {
            throw new ApiError(400, "Invalid verification token");
        }

        user.isVerified = true;
        user.emailVerifyToken = undefined;
        await user.save({ validateBeforeSave: false });

        return res.status(200).json(new ApiResponse(200, {}, "Email verified successfully"));
    } catch (error) {
        next(error);
    }
};

const resendVerification = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            throw new ApiError(400, "Email is required");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        if (user.isVerified) {
            throw new ApiError(400, "Email is already verified");
        }

        // Generate new token if needed, or reuse existing one
        const emailVerifyToken = crypto.randomBytes(20).toString("hex");
        user.emailVerifyToken = emailVerifyToken;
        await user.save({ validateBeforeSave: false });

        await sendVerificationEmail(email, emailVerifyToken);

        return res.status(200).json(new ApiResponse(200, {}, "Verification email resent successfully"));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerInit,
    registerVerify,
    login,
    googleOauth,
    logout,
    refresh,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendVerification,
};


