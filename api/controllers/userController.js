const userService = require('../services/userService');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

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
        const {
            firstName,
            middleName,
            lastName,
            email,
            password,
            role,
            department,
            dateOfBirth,
            gender,
            contact,
            emergencyContact,
            employmentStatus
        } = req.body;

        // Check if email ends with @onboarding.com
        if (!email.endsWith('@onboarding.com')) {
            return res.status(400).json({ error: 'Email must end with @onboarding.com' });
        }

        // Create a new user instance
        const newUser = new User({
            firstName,
            middleName,
            lastName,
            fullName: `${firstName} ${lastName}`,
            email,
            password,
            role,
            department,
            dateOfBirth,
            gender,
            contact,
            emergencyContact,
            employmentStatus
        });
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User added successfully', savedUser});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createUser
};