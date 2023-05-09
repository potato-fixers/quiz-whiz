const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// =============================================
//                Overview
// =============================================

router.get('/', controllers.overview.get);

// =============================================
//                My Quizzes
// =============================================

router.get('/quizzes', controllers.myQuizzes.get);

// can also use delete request (TBD)
router.put('/quizzes/:id', controllers.myQuizzes.delete);

// =============================================
//                Plays
// =============================================

router.get('/history', controllers.history.get);

// =============================================
//                Favorites
// =============================================

router.get('/favorites', controllers.favorites.get);

router.post('/favorites', controllers.favorites.like);

router.delete('/favorites/:id',controllers.favorites.delete);

module.exports = router;