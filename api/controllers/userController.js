const userService = require("../services/userService");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming the authMiddleware attaches the user object to the request
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedData = req.body;
    const updatedUser = await userService.updateUser(userId, updatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(200).json({ message: "User added successfully", newUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createUser,
};
