const userService = require("../services/user.service");

exports.getMe = async (req, res) => {
  try {
    const user = await userService.getMyProfile(req.user.id);

    res.json({
      success: true,
      user
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const user = await userService.updateProfile(req.user.id, req.body);

    res.json({
      success: true,
      user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};


exports.updateSkills = async (req, res) => {
  try {
    const user = await userService.updateSkills(req.user.id, req.body);

    res.json({
      success: true,
      user
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};