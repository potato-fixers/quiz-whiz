const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString = `
      SELECT
        quizzes.id,
        quizzes.quiz_name,
        quizzes.category,
        COUNT(DISTINCT history.id) AS plays,
        COUNT(DISTINCT favorites.id) AS likes,
        to_char(quizzes.created_at, 'FMMonth FMDDth, YYYY') AS created_at
      FROM
        quizzes
      LEFT JOIN
        history ON quizzes.id = history.quiz_id
      LEFT JOIN
        favorites ON quizzes.id = favorites.quiz_id
      WHERE
        quizzes.user_id = ${userId}
      GROUP BY
        quizzes.id
      ORDER BY
        quizzes.created_at DESC;
    `;

    return db.query(queryString)
    .then(res => {
      return res.rows;
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

  delete: (quizId) => {

    const queryString = `
      UPDATE quizzes
      SET user_id = 1
      WHERE id = ${quizId};
    `;

    return db.query(queryString)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

};

