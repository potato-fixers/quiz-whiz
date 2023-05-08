const db = require('../../config/index.js');
//               DB Methods               //
let createQuiz = (data, callback) => {
  // db connection created, insert statement depending on what the data looks like
  var quizData = data.quizzes
  var questionsData = JSON.stringify(data.questions);
  var quizzesQuery = `INSERT INTO quizzes (user_id, category, difficulty, quiz_name) VALUES ('${quizData.user_id}', '${quizData.category}', '${'easy'}', '${quizData.name}') RETURNING id`

  db.query(quizzesQuery, (err, res) => {
    if (err) {
      callback(err, null)
    } else {
      var id = res.rows[0].id
      console.log('hit')
      var questionsQuery = `INSERT INTO questions (quiz_id, questions) VALUES ('${id}', '${questionsData}')`
      db.query(questionsQuery, (err, res) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, true);
        }
      })
    }
  });
}

module.exports.createQuiz = createQuiz;