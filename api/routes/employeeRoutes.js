const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');


// Get user profile
// router.get('/profile', authMiddleware, userController.getProfile);

// Update user profile
// router.put('/profile', authMiddleware, userController.updateProfile);

//Route to get EmployeeList
router.get('/list', employeeController.getEmployeeList);

// Route to add a new Employee
router.post('/add', employeeController.createEmployee);

module.exports = router;