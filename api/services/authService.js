const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/config');

exports.login = async (email, password) => {
    const user = await User.findOne({ email });
   // Check if the user exists
   if (!user) {
       return res.status(400).json({ message: 'User not found' });
   }
    // Compare passwords
    const isMatch = user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
    return token;
};