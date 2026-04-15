const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/apiError");

const adminMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies?.adminToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, "Admin token required");
        }

        const decoded = jwt.verify(token, process.env.ADMIN_TOKEN_SECRET || process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decoded?._id);

        if (!user || user.role !== "admin") {
            throw new ApiError(403, "Access denied. Admin privileges required.");
        }

        req.admin = user;
        next();
    } catch (error) {
        next(new ApiError(401, error?.message || "Invalid admin token"));
    }
};

module.exports = adminMiddleware;
