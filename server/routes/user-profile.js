const express = require('express');
const router = express.Router();
const userController = require('../controllers/userProfile.js')


// Get the necessary user information by ID to populate the user settings page
router.get('/', userController.getUserInfo);

// Update the username
router.put('/updateUsername', userController.updateUsername);

// Update the password
router.put('/updatePassword', userController.updatePassword);

// Update the bio
router.put('/updateBio', userController.updateBio);

// Update the profile pic
router.put('/updatePic', userController.updateProfilePic);


module.exports = router;