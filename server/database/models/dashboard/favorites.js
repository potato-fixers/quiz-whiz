const db = require('../../index.js');

module.exports = {

  getAll: (userId) => {

    const queryString = `
      SELECT
        f.id,
        q.quiz_name,
        f.quiz_id,
        q.category,
        (SELECT COUNT(*) FROM history WHERE quiz_id = f.quiz_id) AS totalPlays,
        (SELECT COUNT(*) FROM favorites WHERE quiz_id = f.quiz_id) AS totalLikes,
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
        f.id,
        f.liked_at,
        q.quiz_name,
        q.category
    `;

    return db.query(queryString)
    .then(res => {

      return res.rows;
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

  getOne: (userId, quizId) => {
    const queryString =`
      SELECT
        *
      FROM
        favorites
      WHERE
        user_id = ${userId} AND quiz_id = ${quizId}
    `;

    return db.query(queryString)
    .then(res => {
      return res.rows[0];
    })
    .catch(err => {
      console.error(err.stack);
    })
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