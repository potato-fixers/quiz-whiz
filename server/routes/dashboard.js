const express = require('express');
const router = express.Router();

// =============================================
//                Overview
// =============================================

router.get('/', (req, res) => {
  res.send('10 most recent played quizzes and counts');
});

// =============================================
//                My Quizzes
// =============================================

router.get('/quizzes', (req, res) => {
  res.send('some created quizzes and total count');
});

router.put('/quizzes/:id', (req, res) => { // can also use delete request (TBD)
  res.send('remove or modify quiz owner to admin');
});

// =============================================
//                Plays
// =============================================

router.get('/plays', (req, res) => {
  res.send('some played quizzes and total count');
});

// =============================================
//                Favorites
// =============================================

router.get('/favorites', (req, res) => {
  res.send('some faved quizzes and total count')
});

router.post('/favorites', (req, res) => {
  res.send('like a quiz');
});

router.delete('/favorites/:id', (req, res) => {
  res.send('delete a quiz');
});

module.exports = router;