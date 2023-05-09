const express = require('express');
const router = express.Router();
const controller = require('../controllers/authentication/user-auth');


router.post('/login', (req, res) => {
  controller.login(req, res);
  res.status(201).end();
})

router.post('/register', (req, res) => {
  console.log(req.session)
  res.status(201).json('yay');
})

module.exports = router