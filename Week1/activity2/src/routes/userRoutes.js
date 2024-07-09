const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a GET route to get all users
router.get('/user', userController.getAllUsers);

// Define a GET route to get a user by ID
router.get('/user/:id', userController.getUserById);

module.exports = router;