const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js');

router.post('/createQuiz', controllers.create.submit)


module.exports = router;