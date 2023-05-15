const db = require('../../index.js');

// Dummy data
const data = [
  {
    id: 1,
    quiz_name: 'Quiz E',
    score: '73%',
    date: 'May 5th, 2023'
  },
  {
    id: 7,
    quiz_name: 'Quiz D',
    score: '90%',
    date: 'May 5th, 2023'
  },
  {
    id: 2,
    quiz_name: 'Quiz C',
    score: '34%',
    date: 'May 4th, 2023'
  },
  {
    id: 5,
    quiz_name: 'Quiz B',
    score: '45%',
    date: 'May 3th, 2023'
  },
  {
    id: 43,
    quiz_name: 'Quiz A',
    score: '56%',
    date: 'May 2th, 2023'
  },
];

module.exports = {

  get: (userId) => {

    const queryString = `
      SELECT
        quizzes.id,
        quizzes.quiz_name,
        history.score,
        to_char(history.date, 'FMMonth FMDDth, YYYY') AS date
      FROM
        quizzes
        INNER JOIN history ON quizzes.id = history.quiz_id
      WHERE
        quizzes.user_id = ${userId}
      ORDER BY
        history.date DESC
      LIMIT 10
    `;

    return db.query(queryString)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

};