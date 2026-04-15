const User = require("../models/User");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiResponse");
const { hashPassword, comparePassword } = require("../utils/hash.utils");

const getMe = async (req, res, next) => {
    try {
        return res
            .status(200)
            .json(new ApiResponse(200, req.user, "User profile fetched successfully"));
    } catch (error) {
        next(error);
    }
};

const changePassword = async (req, res, next) => {
    try {
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            throw new ApiError(400, "Old and new passwords are required");
        }

        const user = await User.findById(req.user._id);
        const isPasswordValid = await comparePassword(oldPassword, user.passwordHash);

        if (!isPasswordValid) {
            throw new ApiError(401, "Invalid old password");
        }

        user.passwordHash = await hashPassword(newPassword);
        await user.save({ validateBeforeSave: false });

        return res.status(200).json(new ApiResponse(200, {}, "Password updated successfully"));
    } catch (error) {
        next(error);
    }
};

const updateMe = async (req, res, next) => {
    try {
        if (!req.file && (!req.body || Object.keys(req.body).length === 0)) {
            throw new ApiError(400, "No data provided for update. Please send text fields or an avatar file.");
        }

        const { displayName, bio } = req.body;
        let { avatarUrl } = req.body;

        // If a file was uploaded to Cloudinary, use its secure_url
        if (req.file && req.file.path) {
            avatarUrl = req.file.path;
        }

        const user = await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    displayName,
                    bio,
                    avatarUrl,
                },
            },
            { new: true, runValidators: true }
        ).select("-passwordHash");

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        return res
            .status(200)
            .json(new ApiResponse(200, user, "Profile updated successfully"));
    } catch (error) {
        next(error);
    }
};

const deactivateMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        user.isActive = false;
        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        };

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, {}, "Account deactivated successfully"));
    } catch (error) {
        next(error);
    }
};

const getPublicProfile = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId).select("displayName avatarUrl bio reputationScore credits totalSessions totalReviews isActive");

        if (!user) {
            throw new ApiError(404, "User not found with the provided ID");
        }

        if (!user.isActive) {
            throw new ApiError(403, "This user account has been deactivated");
        }

        return res
            .status(200)
            .json(new ApiResponse(200, user, "Public profile fetched successfully"));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getMe,
    updateMe,
    changePassword,
    deactivateMe,
    getPublicProfile,
};
