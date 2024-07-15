const mongoose = require('mongoose');

const employeeListSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: { type: String, required: true },
    personalEmail: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    contact: { type: Number, required: true },
    emergencyContact:{ type: Number, required: true },
    employmentStatus:{ type: String, required: true },
    employmentType: { type: String, required: true },
    reportingTo : { type: String, required: true },
    dateOfJoining: { type: Date, required: true },
    jobTitle : { type: String, required: true }
    // add other fields as required
});

const EmployeeList = mongoose.model('EmployeeList', employeeListSchema,'employeeList');

module.exports = EmployeeList;

