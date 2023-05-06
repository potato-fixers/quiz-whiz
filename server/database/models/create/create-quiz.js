const db = require('../config/index');
//               DB Methods               //
let createQuiz = (quizData, callback) => {
  // db connection created, insert statement depending on what the data looks like
  db.query('insert statement', (err, res) => {
    if (err) {
      console.log(err);
      callback(err, null)
    } else {
      callback(null, res)
    }
  })
}

module.exports.createQuiz = createQuiz;