const express = require('express');
const router = express.Router();
const { authentication } = require('../controllers/');


router.post('/login', (req, res) => {
  authentication.login(req, res);
  res.status(201).end();
})

router.post('/register', (req, res) => {
  console.log(req.session)
  authentication.register(req, res);
})

module.exports = router