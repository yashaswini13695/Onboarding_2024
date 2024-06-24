const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const config = require('../config/config');

exports.login = async (email, password) => {
    const user = await userModel.findOne({ email });
    if (!user || !user.comparePassword(password)) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
    return token;
};