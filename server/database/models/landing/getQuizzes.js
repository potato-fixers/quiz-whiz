const db = require('../../config/index.js');
//               DB Methods               //
let getQuizzes = (id, callback) => {
  var getQuery = `SELECT * FROM quizzes WHERE user_id = ${id};`;

  db.query(getQuery, (err, rows) => {
    if (err) {
      callback(err, null)
      console.log(err);
    } else {
      callback(null, rows);
    }
  });
}

module.exports.getQuizzes = getQuizzes;
