const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


// Get user profile
// router.get('/profile', authMiddleware, userController.getProfile);

// Update user profile
// router.put('/profile', authMiddleware, userController.updateProfile);

// Route to add a new user
router.post('/add', userController.createUser);

module.exports = router;