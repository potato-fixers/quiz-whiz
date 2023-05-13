const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/getSample', controllers.getSample.get)


module.exports = router;