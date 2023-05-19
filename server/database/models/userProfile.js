//const db = require('../index.js');
const db = require('../config/index');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = {

  getUserInfoCb: async (userid, cb) => {
    try {
      const { rows } = await db.query(`SELECT * FROM users WHERE id = ${userid}`);
      console.log('GETUSERINFO RESULT for userid ,', userid, ': ', rows);
      cb(null, rows);
    } catch (err) {
      cb(err);
    }
  },

  getUserInfo: async (userid) => {
    try {
      const { rows } = await db.query(`SELECT * FROM users WHERE id = ${userid}`);
      console.log('GETUSERINFO ASYNC RESULT for userid ,', userid, ': ', rows);
      return rows[0];
    } catch (err) {
      throw err;
    }
  },

  updateUsername: async (userid, newUsername, cb) => {
    try {
      const { rows } = await db.query('UPDATE users SET username = $1 WHERE id = $2', [newUsername, userid]);
      console.log('UPDATEPROFILEPIC RESULT: ', rows);
      cb(null, rows);
    } catch (err) {
      cb(err);
    }
  },

  // updatePassword: async (userid, newPassword, cb) => {
  //   try {
  //     // need to integrate with Benny's logic to appropriately update password
  //     // const { rows } = await db.query('UPDATE users SET password = $1 WHERE id = $2', [newPic, userid]);
  //     // console.log('UPDATEPROFILEPIC RESULT: ', rows);
  //     console.log('UPDATE RESULT: ', 'TBD');
  //     cb(null, rows);
  //   } catch (err) {
  //     cb(err);
  //   }
  // },

  updateBio: async (userid, newBio, cb) => {
    try {
      console.log('query string check: ', 'UPDATE users SET bio = $1 WHERE id = $2', [newBio, userid])
      const { rows } = await db.query('UPDATE users SET bio = $1 WHERE id = $2', [newBio, userid]);
      console.log('UPDATEPROFILEPIC RESULT: ', rows);
      cb(null, rows);
    } catch (err) {
      cb(err);
    }
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