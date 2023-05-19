const bcrypt = require("bcrypt");
const { users, userProfile } = require("../../database/models/index");

const saltRounds = 9;
const memoryFactor = 256;
const parallelismFactor = 1;

module.exports = {
  login: async (req, res) => {
    try {
      //pull password and salt from users table via email
      var { id, first_name, last_name, username, profile_img, bio, password } = await users.getAcc(req.body.email);
      //hash password w/ salt and compare
      if (!id || !await bcrypt.compare(req.body.password, password)) {
        res.status(401).send('Invalid username or password');
        return;
      }

      req.session.user = { userId: id, first_name, last_name, username, profile_img, bio };
      req.session.save();
      res.status(200).json(req.session.user).end();
    } catch (err) {
      console.log(err);
      res.status(401).json('Uh Oh, you entered an incorrect username or password')
    }
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
  },

  getSession: (req, res) => {
    const sessionData = req.session.user || {};
    const sessionId = req.sessionID;
    if (sessionId) {
      sessionData.session = sessionId
      res.status(200).json(sessionData).end();
    } else {
      res.status(401).json('no active session');
    }
  },

  updatePassword: async (req, res) => {
    try {
      // pull password and salt from users table via email
      console.log('this is the body:', req.body);
      var { id, password } = await userProfile.getUserInfo(req.body.id);
      console.log('this is the id', id);

      // hash password w/ salt and compare - check if typed in password matches - if not, error
      if (!id || !await bcrypt.compare(req.body.oldPassword, password)) {
        res.status(401).send('Current password incorrect.');
        return;
      }

      // If password matches, then update password -- make request to update password
      // salt password
      salt = await bcrypt.genSalt(saltRounds);
      hash = await bcrypt.hash(req.body.updatedField, salt, null, memoryFactor, parallelismFactor);
      // store hash including generated salt
      req.body.updatedField = hash;
      req.body.password = hash;
      req.body.oldPassword = hash;
      req.body.salt = salt;
      // update password

      console.log('this is the req body: ', req.body);
      await users.updatePassword(req.body);

      res.status(200).end();
    } catch (err) {
      console.log(err);
      res.status(401).json('Uh Oh, you entered the incorrect password')
    }
    //send appropiate responses
  },
}