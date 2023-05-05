require('dotenv').config();
const { Pool, Client} = require('pg');
const db = new Pool ({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.PORT,
})

//               DB Methods               //
let createQuiz = (quizData, calback) => {
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