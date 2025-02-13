const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Public routes
router.post('/signup', registerUser);
router.post('/login', loginUser);

module.exports = router;
