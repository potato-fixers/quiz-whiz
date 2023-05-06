const db = require('../../index.js');

// Dummy data
const data = {
  totalQuizzes: 12,
  totalHistory: 24,
  totalFavorites: 7,
  recents: [
    {
      id: 1,
      quiz_name: 'Quiz E',
      score: '73%',
      date: 'May 5th, 2023'
    },
    {
      id: 7,
      quiz_name: 'Quiz E',
      score: '90%',
      date: 'May 5th, 2023'
    },
    {
      id: 2,
      quiz_name: 'Quiz E',
      score: '34%',
      date: 'May 4th, 2023'
    },
    {
      id: 5,
      quiz_name: 'Quiz E',
      score: '45%',
      date: 'May 3th, 2023'
    },
    {
      id: 43,
      quiz_name: 'Quiz E',
      score: '56%',
      date: 'May 2th, 2023'
    },
  ]
};

module.exports = {

  get: (/* TBD */) => {
    // query logic
    return data;
  },

};