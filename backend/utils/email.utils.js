const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendVerificationEmail = async (email, token) => {
    const url = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Verify your SkillSwap Email",
        html: `<h1>Welcome to SkillSwap!</h1>
           <p>Please click the link below to verify your email:</p>
           <a href="${url}">${url}</a>`,
    };

    await transporter.sendMail(mailOptions);
};

const sendPasswordResetEmail = async (email, token) => {
    const url = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Reset your SkillSwap Password",
        html: `<h1>Password Reset Request</h1>
           <p>Please click the link below to reset your password:</p>
           <a href="${url}">${url}</a>
           <p>This link expires in 1 hour.</p>`,
    };

    await transporter.sendMail(mailOptions);
};

const sendOTP = async (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Your SkillSwap Verification Code",
        html: `<h1>SkillSwap Verification</h1>
           <p>Your 6-digit verification code is:</p>
           <h2 style="letter-spacing: 5px;">${otp}</h2>
           <p>This code will expire in 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendVerificationEmail,
    sendPasswordResetEmail,
    sendOTP,
};

