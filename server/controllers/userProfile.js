// import User
const User = require('../database/models/userProfile');

var user = {'username': 'johndoe',
  'password': 'password',
  'profilePicture': 'pic',
  'bio': 'bio'};

const getUserInfo = (req, res) => {
    // get User info from database
    //const user = await User.findById(req.params.id);
    // set user info on res.locals so the router can send to client;
  console.log('this is the userid', req.query.id);
  User.getUserInfo(req.query.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error getting user info');
    } else {
      console.log('here is the data from getUserInfo', data);
      res.status(200).json(data);
    }
  })
};


const updateUsername = (req, res) => {
  try {
    // update username
    console.log('username update log');
    res.status(200).send('Username Updated Successfully on server');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating username');
  }
};

const updatePassword = (req, res) => {
  try {
    // update password
    console.log('password update log');
    res.status(200).send('Password Updated Successfully on server');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating password');
  }
};

const updateBio = (req, res) => {
  try {
    // update bio
    console.log('bio update log');
    res.status(200).send('Bio Updated Successfully on server');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error while updating bio');
  }
};

const updateProfilePic = (req, res) => {
  const id = req.query.id;
  const { filename, mimetype, buffer } = req.file;
  const byteaBuffer = Buffer.from(buffer, 'binary');

  User.updateProfilePic(id, byteaBuffer, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server Error updating photo');
    } else {
      console.log('here is the data from updateProfilePic', data);
      res.status(200).json(data);
    }
  })
};


module.exports = {
    getUserInfo,
    updateUsername,
    updatePassword,
    updateBio,
    updateProfilePic
};

