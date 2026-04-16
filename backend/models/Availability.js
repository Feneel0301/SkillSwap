const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },

    dayOfWeek: {
      type: Number,
      required: true,
      min: 0,
      max: 6, // 0 = Sunday, 6 = Saturday
    },

    startTime: {
      type: String,
      required: true,
      match: /^([01]\d|2[0-3]):[0-5]\d$/, // HH:mm format
    },

    endTime: {
      type: String,
      required: true,
      match: /^([01]\d|2[0-3]):[0-5]\d$/,
    },

    isRecurring: {
      type: Boolean,
      default: true,
    },

    overrideDate: {
      type: Date,
    },

    timezone: {
      type: String,
      default: "UTC",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false }, // only createdAt
  }
);


// 🔍 Indexes

// userId + dayOfWeek
availabilitySchema.index({ userId: 1, dayOfWeek: 1 });

// userId + overrideDate (sparse like MongoDB)
availabilitySchema.index(
  { userId: 1, overrideDate: 1 },
  { sparse: true }
);


// ⚠️ Custom Validation (VERY IMPORTANT)
availabilitySchema.pre("save", function (next) {
  // Ensure endTime > startTime
  if (this.startTime >= this.endTime) {
    return next(new Error("endTime must be greater than startTime"));
  }

  next();
});


const Availability = mongoose.model("Availability", availabilitySchema);

module.exports = Availability;