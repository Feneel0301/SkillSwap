const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/me", authMiddleware, userController.getMe);
router.put("/profile", authMiddleware, userController.updateProfile);
router.post("/skills", authMiddleware, userController.updateSkills);

module.exports = router;