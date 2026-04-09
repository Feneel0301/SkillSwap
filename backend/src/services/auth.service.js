const User = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

exports.registerUser = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already exists");

  const user = await User.create({ name, email, password });

  const token = generateToken(user);

  const userObj = user.toObject();
  delete userObj.password;

  return { user: userObj, token };
};


exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("User not found");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Invalid password");

  const token = generateToken(user);

  const userObj = user.toObject();
  delete userObj.password;

  return { user: userObj, token };
};


exports.getCurrentUser = async (userId) => {
  return User.findById(userId).select("-password");
};