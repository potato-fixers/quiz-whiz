const bcrypt = require("bcrypt");
const { users } = require("../../database/models/index");

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
    try {
      //salt password
      salt = await bcrypt.genSalt(saltRounds);
      hash = await bcrypt.hash(req.body.password, salt, null, memoryFactor, parallelismFactor);
      //store hash including generated salt
      req.body.password = hash;
      req.body.salt = salt;
      //create account
      await users.createAcc(req.body);
      res.status(201).end();
    } catch (err) {
      console.log(err);
      res.status(409).end();
    }
    return;
  }
}