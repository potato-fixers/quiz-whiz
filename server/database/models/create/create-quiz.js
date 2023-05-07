const db = require('../../config/index.js');
//               DB Methods               //
let createQuiz = (data, callback) => {
  // db connection created, insert statement depending on what the data looks like
  var quizData = data.quizzes
  var questionsData = data.questions
  var queryString = `INSERT INTO quizzes (user_id, category, difficulty, quiz_name) VALUES ('${quizData.user_id}', '${quizData.category}', '${'easy'}', '${quizData.name}') RETURNING id`

  db.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      callback(err, null)
    } else {
      var id = res.rows[0].id
      // callback(null, res)
    }
  })
}

module.exports.createQuiz = createQuiz;