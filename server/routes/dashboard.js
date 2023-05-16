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

router.delete('/quizzes/:id', controllers.myQuizzes.delete);

// =============================================
//                Plays
// =============================================

router.get('/history', controllers.history.get);

// =============================================
//                Favorites
// =============================================

router.get('/favorites', controllers.favorites.get);

router.post('/favorites', controllers.favorites.like);

router.delete('/favorites/:id',controllers.favorites.unlike);

// =============================================
//                Counts
// =============================================

router.get('/counts', controllers.counts.get);

module.exports = router;