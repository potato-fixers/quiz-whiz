const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-auth');


router.post('/login', (req, res) => {
  controller.login(req, res);
  res.status(201).end();
})

module.exports = router