const db = require('../../index.js');

// Dummy data
const data = {
  totalQuizzes: 12,
  quizzes: [
    {
      id: 58,
      quiz_name: 'Math Quiz',
      category: 'Education',
      type: 'Multiple choices',
      plays: 3,
      created_at: 'May 5th, 2023'
    },
    {
      id: 35,
      quiz_name: 'Song Quiz',
      category: 'Music',
      type: 'Multiple choices',
      plays: 23,
      created_at: 'May 23th, 2022'
    },
    {
      id: 64,
      quiz_name: 'Bollywood movie quiz',
      category: 'Movie',
      type: 'True/Fasle',
      plays: 34,
      created_at: 'Jan 6th, 2023'
    },
    {
      id: 5,
      quiz_name: 'Lakers or Warriors?',
      category: 'Sport',
      type: 'Multiple choices',
      plays: 45,
      created_at: 'May 5th, 2020'
    },
    {
      id: 43,
      quiz_name: 'More math quiz',
      category: 'Education',
      type: 'Multiple choices',
      plays: 1,
      created_at: 'May 5th, 1999'
    },
  ]
};

module.exports = {

  get: (/* TBD */) => {
    // query logic
    return data;
  },

  delete: (/* TBD */) => {
    // query logic
  },

};