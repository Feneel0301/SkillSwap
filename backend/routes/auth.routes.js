const express = require("express");
const {
    registerInit,
    registerVerify,

    login,
    googleOauth,
    logout,
    refresh,
    forgotPassword,
    resetPassword,
    verifyEmail,
    resendVerification
} = require("../controllers/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register-init", registerInit);
router.post("/register-verify", registerVerify);
router.post("/login", login);
router.post("/oauth", googleOauth);
router.post("/logout", authMiddleware, logout);
router.post("/refresh", refresh);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/verify-email", verifyEmail);
router.post("/resend-verification", resendVerification);


module.exports = router;
