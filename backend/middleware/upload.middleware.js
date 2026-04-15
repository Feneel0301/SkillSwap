const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "skillswap/avatar",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB limit
    },
});

module.exports = upload;
