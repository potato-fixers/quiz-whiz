const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString = `
      SELECT
        history.id,
        quizzes.quiz_name,
        CONCAT(history.score, '%') AS score,
        to_char(history.date, 'FMMonth FMDDth, YYYY') AS date
      FROM
        history
        INNER JOIN quizzes ON quizzes.id = history.quiz_id
      WHERE
        history.user_id = ${userId}
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