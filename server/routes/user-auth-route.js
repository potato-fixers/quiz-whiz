const express = require('express');
const router = express.Router();
const { authentication } = require('../controllers/');


router.post('/login', (req, res) => {
  authentication.login(req, res);
});

router.post('/register', (req, res) => {
  authentication.register(req, res);
});

router.get('/session', (req, res) => {
  authentication.getSession(req, res);
})

module.exports = router