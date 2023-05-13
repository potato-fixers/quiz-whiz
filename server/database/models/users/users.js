const db = require('../../index.js');

module.exports = {
  createAcc: async (user) => {
    console.log(user, 'in models');
    const query = `
      INSERT INTO users (first_name, last_name, email, password, username, bio, profile_img, salt)
      VALUES ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.password}', '${user.username}', '${user.bio}', '${user.profile_img}', '${user.salt}');
    `;
    try {
      await db.query(query);
      return Promise.resolve('success at creating user')
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getAcc: async (email) => {
    console.log(email, 'in users');
    //get user info first
    const accQuery = `SELECT * FROM users WHERE email = '${email}'`;

    try {
      var data = await db.query(accQuery);
      // await db.query(`CREATE UNIQUE INDEX ON users (username) WHERE username <> '';`)
      return Promise.resolve(data.rows[0]);
    } catch (error) {
      return Promise.reject(error);
    }
  },


};