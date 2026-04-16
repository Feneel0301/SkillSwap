const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[^@]+@[^@]+\.[^@]+$/, "Please use a valid email"],
    },
    passwordHash: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 60,
    },
    avatarUrl: String,
    bio: {
      type: String,
      maxlength: 500,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    credits: {
      type: Number,
      default: 0,
      min: 0,
    },
    reputationScore: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    totalSessions: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
    oauthProvider: {
      type: String,
      enum: ["google", "github"],
    },
    oauthId: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      default: "Earth",
    },
    skillsTeach: {
      type: [String],
      default: [],
    },
    skillsLearn: {
      type: [String],
      default: [],
    },
    sessionRate: {
      type: Number,
      default: 0,
      min: 0,
    },
    availability: [
      {
        date: String, // ISO date string "YYYY-MM-DD"
        slots: [String], // e.g. ["09:00 AM", "11:30 AM"]
      }
    ],
    emailVerifyToken: String,
    passwordResetToken: String,
    passwordResetExpiry: Date,
    lastLoginAt: Date,
  },
  { timestamps: true }
);

// Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index(
  { oauthId: 1, oauthProvider: 1 },
  { unique: true, sparse: true }
);
userSchema.index({ isActive: 1, reputationScore: -1 });
userSchema.index({ credits: 1 });
userSchema.index({ createdAt: -1 });
userSchema.index({ displayName: "text", bio: "text" });

module.exports = mongoose.model("User", userSchema);