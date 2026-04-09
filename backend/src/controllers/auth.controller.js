const User = require("../models/user.model");
const { generateToken } = require("../utils/jwt");

// REGISTER
exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = generateToken(user);

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid password");

    const token = generateToken(user);

    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};