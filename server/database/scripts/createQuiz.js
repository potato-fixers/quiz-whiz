require('dotenv').config();
const db = require('../config/index');

db.query('CREATE TABLE quizzes (id INT, user_id TEXT, category TEXT, difficulty TEXT, quiz_name TEXT, PRIMARY KEY(id))', (err, res) => {
  if (err) {
    console.log('Quiz Table creation failed:', process.env.DB, err)
  } else {
    db.query('CREATE TABLE questions (id INT, quiz_id INT, questions TEXT, PRIMARY KEY(id), CONSTRAINT fk_questions FOREIGN KEY(quiz_id) REFERENCES quizzes(id))', (err, res) => {
      if (err) {
        console.log('Questions Table creation error');
      } else {
        console.log('All tables succesfully created');
        db.end();
      }
    })
  }
})