const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString = `
      SELECT
        q.id,
        q.quiz_name,
        q.category,
        COUNT(DISTINCT h.id) AS totalPlays,
        COUNT(DISTINCT f.id) AS totalLikes,
        to_char(f.liked_at, 'FMMonth, FMDDth, YYYY') AS liked_at
      FROM
        favorites f
      INNER JOIN
        quizzes q ON f.quiz_id = q.id
      LEFT JOIN
        history h ON q.id = h.quiz_id AND f.user_id = h.user_id
      WHERE
        f.user_id = ${userId}
      GROUP BY
        q.id,
        f.liked_at
    `;

    return db.query(queryString)
    .then(res => {

      return res.rows;
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

  like: (userId, quizId) => {

    const queryString = `
      INSERT INTO
        favorites (user_id, quiz_id)
      VALUES
        (${userId}, ${quizId})
    `;

    return db.query(queryString)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err.stack);
    })
  },

  unlike: (id) => {

    const queryString = `
      DELETE FROM
        favorites
      WHERE
        id = ${id}
    `;

    return db.query(queryString)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err.stack);
    })
  },

};