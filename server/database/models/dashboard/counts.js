const db = require('../../index.js');

module.exports = {
  // user_id 1 should be guest or sample quizzes
  get: (user_id = 1) => {

    const queryString = `
      SELECT
      (SELECT COUNT(*) FROM quizzes WHERE user_id = ${user_id}) AS quizzes,
      (SELECT COUNT(*) FROM history WHERE user_id = ${user_id}) AS plays,
      (SELECT COUNT(*) FROM favorites WHERE user_id = ${user_id}) AS favorites;
    `;

    return db.query(queryString)
    .then((res) =>{
      return res.rows[0];
    })
    .catch(err => {
      console.error(err.stack);
    });
  },

};