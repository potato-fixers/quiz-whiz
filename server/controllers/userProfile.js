// import User
// const User = require('../models/user');

var user = {'username': 'johndoe',
  'password': 'password',
  'profilePicture': 'pic',
  'bio': 'bio'};

const getUserInfo = (req, res) => {
  try {
    // get User info from database
    //const user = await User.findById(req.params.id);
    // set user info on res.locals so the router can send to client;
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error getting user info');
  }
};

const updateUsername = (req, res) => {
  try {
    // update username
    res.status(200).send('Username Updated Successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating username');
  }
};

const updatePassword = (req, res) => {
  try {
    // update password
    res.status(200).send('Password Updated Successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating password');
  }
};

const updateBio = (req, res) => {
  try {
    // update bio
    res.status(200).send('Bio Updated Successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating bio');
  }
};

const updateProfilePic = (req, res) => {
  try {
    // update profile pic
    res.status(200).send('Profile Pic Updated Successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating profile pic');
  }
};


module.exports = {
    getUserInfo,
    updateUsername,
    updatePassword,
    updateBio,
    updateProfilePic
};

