const bcrypt = require("bcrypt");
// const users = require("../database/models/index")

const saltRounds = 9;
const memoryFactor = 256;
const parallelismFactor = 1;

module.exports = {
  login: (req, res) => {
    //pull password and salt from users table via email
    //hash password w/ salt and compare
    //send appropiate responses
  },

  register: async (req, res) => {
    //salt password
    try {
      salt = await bcrypt.genSalt(saltRounds);
      hash = await bcrypt.hash(password, salt, null, memoryFactor, parallelismFactor);
      //store hash including generated salt
    } catch (err) {
      console.log(err);
    }
  }
}