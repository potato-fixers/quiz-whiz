const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString =`
      SELECT
        h.id,
        h.quiz_id,
        q.quiz_name,
        q.category,
        h.score,
        CAST(EXTRACT(epoch FROM h.duration) / 60 AS integer) AS duration,
        h.finished,
        to_char(h.date, 'FMMonth FMDDth, YYYY') AS date,
        CASE WHEN f.id IS NOT NULL THEN true ELSE false END AS liked
      FROM
        history h
      JOIN
        quizzes q ON q.id = h.quiz_id
      LEFT JOIN
        favorites f ON f.quiz_id = q.id AND f.user_id = ${userId}
      WHERE
        h.user_id = ${userId}
      ORDER BY
        h.date DESC
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