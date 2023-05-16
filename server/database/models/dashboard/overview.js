const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    if (userId === undefined) {
      userId = 0;
    }

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