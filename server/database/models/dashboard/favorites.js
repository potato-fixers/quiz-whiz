const db = require('../../index.js');

// Dummy data
const data = [
  {
    id: 1,
    quiz_name: 'Quiz E',
    totalPlays: 23,
    totalLikes: 13,
    date: 'May 5th, 2023'
  },
  {
    id: 7,
    quiz_name: 'Quiz D',
    totalPlays: 34,
    totalLikes: 34,
    date: 'May 5th, 2023'
  },
  {
    id: 2,
    quiz_name: 'Quiz C',
    totalPlays: 231,
    totalLikes: 133,
    date: 'May 4th, 2023'
  },
  {
    id: 5,
    quiz_name: 'Quiz B',
    totalPlays: 31,
    totalLikes: 3,
    date: 'May 3th, 2023'
  },
  {
    id: 43,
    quiz_name: 'Quiz A',
    totalPlays: 21,
    totalLikes: 13,
    date: 'May 2th, 2023'
  },
];

module.exports = {

  get: (/* TBD */) => {
    // query logic
    return data;
  },

  like: (/* TBD */) => {
    // query logic
  },

  delete: (/* TBD */) => {
    // query logic
  },

};