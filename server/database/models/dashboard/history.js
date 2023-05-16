const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString =`
      SELECT
        q.id,
        q.quiz_name,
        q.category,
        h.score,
        h.duration,
        h.finished,
        to_char(h.date, 'Mon DDth, YYYY') AS date
      FROM
        history h
      JOIN
        quizzes q ON q.id = h.quiz_id
      WHERE
        h.user_id = ${userId};
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