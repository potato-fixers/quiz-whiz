const db = require('../../config/index.js');
//               DB Methods               //
let getQuizzes = (query, callback) => {
  let diff, cate, name;
  if (query.difficulty === undefined || query.difficulty === 'All') {
    diff = '';
  } else {
    diff = query.difficulty;
  }

  if (query.category === undefined || query.category === 'All') {
    cate = '';
  } else {
    cate = query.category;
  }

  if (query.query === undefined) {
    name = '';
  } else {
    name = query.query;
  }

  var getQuery = `SELECT * FROM quizzes WHERE user_id = ${query.id} AND quiz_name LIKE '%${name}%' AND category LIKE '%${cate}%' and difficulty LIKE '%${diff}%';`;
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
