const express = require('express')
const router = express.Router()
const { fetch, saveScore } = require("../database/scripts/take-quiz/utilities");


// =============================================
//           			  GET REQs
// =============================================
router.get('/', (req, res) => {
  res.send('Hello Take Quiz on 8080')
});

router.get('/:id/start', (req, res) => {
  let id = req.params.id;
  fetch(id, "quizzes", (err, payload) => {
    if (err) {
      console.log(`Error from /quiz/${id}/start`, err);
      res.status(500).json(err);
    } else {
      // console.log('Quiz Start Payload', payload);
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
      console.log(`Error from /quiz/${id}/question`, err);
      res.status(500).json(err);
    } else {
      let questions = JSON.parse(payload[0].questions);
      // console.log('Quiz Question Payload', questions);
      res.status(200).json(questions);
    }
  });
});

router.get('/:id/summary', (req, res) => {
  let id = req.params.id;
  fetch(id, "quizzes", (err, payload) => {
    if (err) {
      console.log(`Error from /quiz/${id}/summary`, err);
      res.status(500).json(err);
    } else {
      // console.log('Quiz Summary Payload', payload);
      res.status(200).json(payload); // return score
    }
  });
});

// =============================================
//           			  POST REQs
// =============================================
// Save Quiz Score to User History
router.post('/:id', (req, res) => {
  const payload = {
    user_id: req.body.user_id,
    quiz_id: req.params.id | req.body.quiz_id,
    score: req.body.score,
    duration: req.body.duration,
    finished: req.body.finished,
  }
  // console.log('Payload from routes', payload);

  saveScore(payload, (err, payload) => {
    if (err) {
      console.log(`Error from Save Quiz Score Route`, err);
      res.status(500).json(err);
    } else {
      // console.log('Saved Your Score!', payload);
      res.status(200).json(payload); // return score
    }
  });
});

module.exports = router;
