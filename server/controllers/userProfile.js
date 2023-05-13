// import User
const User = require('../database/models/userProfile');

var user = {'username': 'johndoe',
  'password': 'password',
  'profilePicture': 'pic',
  'bio': 'bio'};


module.exports = {

  getUserInfo: (req, res) => {
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
  },

  updateUsername: (req, res) => {
    const id = req.query.id;
    const newUsername = req.body.updatedField;

    console.log('changing to username: ', newUsername);

    User.updateUsername(id, newUsername, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error updating username');
      } else {
        console.log('here is the data from updateusername', data);
        res.status(200).json(data);
      }
    })
  },

  updatePassword: (req, res) => {
    const id = req.query.id;
    const newPassword = req.body.updatedField;

    User.updatePassword(id, newPassword, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error updating password');
      } else {
        console.log('here is the data from update password', data);
        res.status(200).json(data);
      }
    })
  },

  updateBio: (req, res) => {
    const id = req.query.id;
    const newBio = req.body.updatedField;

    User.updateBio(id, newBio, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('Server Error updating bio');
      } else {
        console.log('here is the data from update bio', data);
        res.status(200).json(data);
      }
    })
  },

  updateProfilePic: (req, res) => {
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
  }
}

