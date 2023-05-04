const express = require('express')
const router = express.Router()
const fetch = require("../database/scripts/take-quiz/utilities");

router.get('/', (req, res) => {
  res.send('Hello Take Quiz on 8080')
});

router.get('/:id/question', (req, res) => {
  fetch((err, payload) => {
    if (err) {
      console.log('Error from /quiz/:id/question', err);
      res.status(500).json(err);
    } else {
      console.log('Payload Exists?', payload);
      res.status(200).json(payload);
    }
  });
});

module.exports = router;
