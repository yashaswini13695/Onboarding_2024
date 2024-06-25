const { getDB } = require("../config/db");
const User = require('../models/userModel');

const getUserById = async (userId) => {
  const db = getDB();
  return await db.collection("userList").findOne({ _id: userId });
};

const updateUser = async (userId, updatedData) => {
  const db = getDB();
  await db
    .collection("userList")
    .updateOne({ _id: userId }, { $set: updatedData });
  return await getUserById(userId);
};

const createUser = async (userData) => {
  // const hashedPassword = await bcrypt.hash(reqBody.password, 10);
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
    employmentStatus,
  } = userData;

  // Check if email ends with @onboarding.com
  if (!email.endsWith("@onboarding.com")) {
    return res
      .status(400)
      .json({ error: "Email must end with @onboarding.com" });
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
    employmentStatus,
  });
  const savedUser = await newUser.save();
  return savedUser;
};

module.exports = { getUserById, updateUser, createUser };
