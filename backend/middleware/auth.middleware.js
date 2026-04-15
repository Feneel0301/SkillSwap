const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/apiError");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Token required");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decoded?._id).select("-passwordHash");

        if (!user) {
            throw new ApiError(401, "Invalid access token");
        }

        if (!user.isActive) {
            throw new ApiError(401, "User account is suspended");
        }

        req.user = user;
        next();
    } catch (error) {
        next(new ApiError(401, error?.message || "Invalid access token"));
    }
};

module.exports = authMiddleware;
