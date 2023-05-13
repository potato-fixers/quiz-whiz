//const db = require('../index.js');
const db = require('../config/index');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {

  getUserInfo: async (userid, cb) => {
    try {
      const { rows } = await db.query(`SELECT * FROM users WHERE id = ${userid}`);
      console.log('GETUSERINFO RESULT for userid ,', userid, ': ', rows);
      cb(null, rows);
    } catch (err) {
    cb(err);
    }
  },

  updateUsername: async (userid, newUsername, cb) => {
    // query logic
    try {
      console.log('UPDATEUSERNAME RESULT: ', rows);
      cb(null, rows);
    } catch (err) {
      cb(err);
    }
  },

  updatePassword: async (userid, newPassword, cb) => {
    // query logic
  },

  updateBio: async (userid, newBio, cb) => {
    // query logic
  },

  updateProfilePic: async (userid, newPic, cb) => {
    try {
      const { rows } = await db.query('UPDATE users SET profile_img = $1 WHERE id = $2', [newPic, userid]);
      console.log('UPDATEPROFILEPIC RESULT: ', rows);
      cb(null, rows);
    } catch (err) {
      cb(err);
    }
  },
};

// module.exports.getUserInfo(1);