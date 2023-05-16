const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.post('/createSample', controllers.createSample.createSample)


module.exports = router;