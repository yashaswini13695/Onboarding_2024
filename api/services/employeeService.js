const { getDB } = require("../config/db");
const Employee = require('../models/employeeModels/employee');
const EmployeeList = require('../models/employeeModels/employeeList');

const createEmployee = async (userData) => {
  // const hashedPassword = await bcrypt.hash(reqBody.password, 10);
  const {
    firstName,
    middleName,
    lastName,
    personalEmail,
    email,
    password,
    role,
    department,
    dateOfBirth,
    gender,
    contact,
    emergencyContact,
    employmentStatus,
    employmentType,
    reportingTo,
    dateOfJoining,
    jobTitle
  } = userData;

  // Check if email ends with @onboarding.com
  if (!email.endsWith("@onboarding.com")) {
    return res
      .status(400)
      .json({ error: "Email must end with @onboarding.com" });
  }

  // Create a new user instance
  const newEmployee = new Employee({
    firstName,
    middleName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    personalEmail,
    email,
    password,
    role,
    department,
    dateOfBirth,
    gender,
    contact,
    emergencyContact,
    employmentStatus,
    employmentType,
    reportingTo,
    dateOfJoining,
    jobTitle
  });
  const savedUser = await newEmployee.save();
  return savedUser;
};

const getEmployeeList = async () => {
  try {
      const users = await EmployeeList.find().select('firstName middleName lastName fullName email role department dateOfBirth gender contact emergencyContact employmentType employmentStatus reportingTo jobTitle dateOfJoining');
      return users;
  } catch (error) {
      throw new Error('Error fetching user list');
  }
};

module.exports = { createEmployee,getEmployeeList };
