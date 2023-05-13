const db = require('../../index.js');

// Dummy data
const data = [
  {
    id: 1,
    quiz_name: 'Quiz E',
    category: 'Music',
    plays: 13,
    score: '73%',
    duration: 300, // seconds or ms
    finished: true,
    date: 'May 5th, 2023'
  },
  {
    id: 7,
    quiz_name: 'Quiz D',
    category: 'Sport',
    plays: 2,
    score: '90%',
    duration: 240, // seconds
    finished: true,
    date: 'Apr 5th, 2023'
  },
  {
    id: 2,
    quiz_name: 'Quiz C',
    category: 'Education',
    plays: 1,
    score: '34%',
    duration: null,
    finished: false,
    date: 'May 4th, 2023'
  },
  {
    id: 5,
    quiz_name: 'Quiz B',
    category: 'Sport',
    plays: '3',
    score: '45%',
    duration: 300,
    finished: true,
    date: 'May 3th, 2023'
  },
  {
    id: 43,
    quiz_name: 'Quiz A',
    category: 'Music',
    plays: 5,
    score: '56%',
    duration: 500,
    finished: true,
    date: 'May 2th, 2023'
  },
];

module.exports = {

  get: (/* TBD */) => {
    // query logic
    return data;
  },

};