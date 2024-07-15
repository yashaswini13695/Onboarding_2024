const jwt = require('jsonwebtoken');
const Employee = require('../models/employeeModels/employee');
const config = require('../config/config');

exports.login = async (email, password) => {
    const employee = await Employee.findOne({ email });
   // Check if the employee exists
   if (!employee) {
       return res.status(400).json({ message: 'Employee not found' });
   }
    // Compare passwords
    const isMatch = employee.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: employee._id }, config.jwtSecret, { expiresIn: '1h' });
    return {token, employee};
};
