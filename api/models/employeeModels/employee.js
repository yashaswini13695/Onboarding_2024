const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    fullName: { type: String, required: true },
    personalEmail: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String },
    contact: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    employmentStatus: { type: String },
    employmentType: { type: String, required: true },
    reportingTo : { type: String },
    dateOfJoining: { type: Date, required: true },
    jobTitle : { type: String, required: true }
});

employeeSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

employeeSchema.methods.comparePassword = function(plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password);
};

const Employee = mongoose.model('Employee', employeeSchema, 'employeeList');
// Specifing the collection name where this model will be stored
module.exports = Employee;