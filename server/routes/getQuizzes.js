const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.get('/getQuizzes', controllers.getQuizzes.get)


module.exports = router;