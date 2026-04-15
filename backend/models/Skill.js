const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
      trim: true
    },

    category: {
      type: String,
      maxlength: 60,
      index: true
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced", "expert"],
      required: true,
      index: true
    },

    type: {
      type: String,
      enum: ["teach", "learn"],
      required: true,
      index: true
    },

    description: {
      type: String,
      maxlength: 1000
    },

    tags: [
      {
        type: String,
        trim: true
      }
    ],

    creditRate: {
      type: Number,
      required: true,
      min: 1,
      max: 500,
      index: true
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true
    }
  },
  {
    timestamps: true // automatically adds createdAt & updatedAt
  }
);


// 🔍 Indexes (same as your MongoDB ones)
skillSchema.index({ userId: 1 });

skillSchema.index({ type: 1, category: 1 });

skillSchema.index({ type: 1, level: 1 });

skillSchema.index({ isActive: 1, type: 1, creditRate: 1 });

// 🔎 Text Search Index
skillSchema.index(
  { name: "text", description: "text", tags: "text" },
  {
    weights: {
      name: 10,
      tags: 5,
      description: 1
    }
  }
);

module.exports = mongoose.model("Skill", skillSchema);