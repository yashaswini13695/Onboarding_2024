const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    dateOfBirth: { type: Date },
    gender: { type: String },
    contact: { type: String },
    emergencyContact: { type: String },
    employmentStatus: { type: String }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function(plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password);
};

const User = mongoose.model('User', userSchema, 'userList');
// Specifing the collection name where this model will be stored
module.exports = User;