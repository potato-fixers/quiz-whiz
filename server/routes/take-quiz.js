const express = require('express')
const router = express.Router()
const fetch = require("../database/scripts/take-quiz/utilities");

router.get('/', (req, res) => {
  res.send('Hello Take Quiz on 8080')
});

// Title might be cleaner in the URL slug than the quiz ID. Get team input
// router.get('/:quiz_title/start', (req, res) => {
router.get('/:id/start', (req, res) => {
  let id = req.params.id;
  fetch(id, "quizzes", (err, payload) => {
    if (err) {
      console.log('Error from /quiz/:id/question', err);
      res.status(500).json(err);
    } else {
      console.log('Quiz Start Payload', payload[0].title, payload[0].category);
      res.status(200).json({
        title: payload[0].quiz_name, 
        category: payload[0].category, 
        difficulty: payload[0].difficulty
      });
    }
  });
});

router.get('/:id/question', (req, res) => {
  let id = req.params.id;
  fetch(id, "questions", (err, payload) => {
    if (err) {
      console.log('Error from /quiz/:id/question', err);
      res.status(500).json(err);
    } else {
      console.log('Quiz Question Payload', payload);
      res.status(200).json(payload);
    }
  });
});

router.get('/:id/summary', (req, res) => {
  let id = req.params.id;
  fetch(id, "quizzes", (err, payload) => {
    if (err) {
      console.log('Error from /quiz/:id/question', err);
      res.status(500).json(err);
    } else {
      console.log('Quiz Summary Payload', payload);
      res.status(200).json(payload);
    }
  });
});

module.exports = router;
