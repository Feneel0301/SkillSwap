const express = require("express");
const {
    getMe,
    updateMe,
    deactivateMe,
    getPublicProfile,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

const upload = require("../middleware/upload.middleware");

const router = express.Router();

// Private routes
router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, upload.single("avatar"), updateMe);
router.delete("/me", authMiddleware, deactivateMe);

// Public routes
router.get("/:userId", getPublicProfile);

module.exports = router;
