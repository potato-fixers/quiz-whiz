const express = require('express');
const userProfileRouter = express.Router();
const userController = require('../controllers/user-profile.js')


// Get the necessary user information by ID to populate the user settings page
userProfileRouter.get('/', userController.getUserInfo);

// Update the username
userProfileRouter.put('/username', userController.updateUsername);

// Update the password
userProfileRouter.put('/password', userController.updatePassword);

// Update the bio
userProfileRouter.put('/bio', userController.updateBio);

// Update the profile pic
userProfileRouter.put('/profilepic', userController.updateProfilePic);


module.exports = userProfileRouter;