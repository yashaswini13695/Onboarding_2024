const employeeService = require("../services/employeeService");

const createEmployee = async (req, res) => {
    try {
      const newUser = await employeeService.createEmployee(req.body);
      res.status(200).json({ message: "User added successfully", newUser });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  const getEmployeeList = async (req, res) => {
    try {
        const users = await employeeService.getEmployeeList();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    createEmployee,getEmployeeList
  };