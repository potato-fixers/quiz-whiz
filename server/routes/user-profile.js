const express = require('express');
const router = express.Router();
const userController = require('../controllers/userProfile.js')
const upload = require('../middlewares/upload');


// Get the necessary user information by ID to populate the user settings page
router.get('/user', userController.getUserInfo);

// Update the username
router.put('/updateUsername', userController.updateUsername);

// // Update the password
// router.put('/updatePassword', userController.updatePassword);

// Update the bio
router.put('/updateBio', userController.updateBio);

// Update the profile pic
router.put('/updatePic', upload.single('image'), userController.updateProfilePic);


module.exports = router;