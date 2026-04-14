const User = require("../models/User");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const { hashPassword, comparePassword } = require("../utils/hash.utils");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt.utils");

const register = async (req, res, next) => {
    try {
        const { email, password, displayName } = req.body;

        if ([email, password, displayName].some((field) => field?.trim() === "")) {
            throw new ApiError(400, "All fields are required");
        }

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            throw new ApiError(409, "User with email already exists");
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            email,
            passwordHash: hashedPassword,
            displayName,
            isVerified: true, // Default to true for simplified flow
        });

        const createdUser = await User.findById(user._id).select("-passwordHash");

        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user");
        }

        return res.status(201).json(
            new ApiResponse(201, createdUser, "User registered successfully")
        );
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

        const isPasswordValid = await comparePassword(password, user.passwordHash);

        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid user credentials");
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        user.lastLoginAt = new Date();
        await user.save({ validateBeforeSave: false });

        const loggedInUser = await User.findById(user._id).select("-passwordHash");

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
                        user: loggedInUser,
                        accessToken,
                        refreshToken,
                    },
                    "User logged in successfully"
                )
            );
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
};
