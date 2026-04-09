const User = require("../models/user.model");

exports.getMyProfile = async (userId) => {
  return User.findById(userId).select("-password");
};


exports.updateProfile = async (userId, data) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: data },
    { new: true, runValidators: true }
  ).select("-password");

  return user;
};


exports.updateSkills = async (userId, { skillsTeach, skillsLearn }) => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      skillsTeach,
      skillsLearn
    },
    { new: true }
  ).select("-password");

  return user;
};