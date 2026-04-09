const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    index: true
  },

  password: {
    type: String,
    required: true,
    select: false // 🔥 prevents sending password by default
  },

  credits: {
    type: Number,
    default: 0,
    min: 0
  },

  skillsTeach: [{
    name: String,
    level: {
      type: String,
      enum: ["beginner", "intermediate", "expert"]
    }
  }],

  skillsLearn: [String],

  bio: { type: String, default: "" },
  title: { type: String, default: "" },
  location: { type: String, default: "" },
  profileImage: { type: String, default: "" },

  rating: {
    avg: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },

  availability: [{
    date: String,
    slots: [{
      time: String,
      isBooked: { type: Boolean, default: false }
    }]
  }]
}, { timestamps: true });


// 🔐 Hash password
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});


// 🔑 Compare password
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);