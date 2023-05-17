const db = require('../../index.js');

module.exports = {

  get: (userId) => {

    const queryString = `
      SELECT
      (SELECT COUNT(*) FROM quizzes WHERE user_id = ${userId}) AS quizzes,
      (SELECT COUNT(*) FROM history WHERE user_id = ${userId}) AS plays,
      (SELECT COUNT(*) FROM favorites WHERE user_id = ${userId}) AS favorites;
    `;

    return db.query(queryString)
    .then((res) =>{
      return res.rows[0];
    })
    .catch(err => {
      console.error(err.stack);
      res.sendStatus(500);
    });
  },

};