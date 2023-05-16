require('dotenv').config();
const db = require('../config/index');

db.query('CREATE TABLE quizzes (id SERIAL, user_id INT, category TEXT, difficulty TEXT, quiz_name TEXT, PRIMARY KEY(id))', (err, res) => {
  if (err) {
    console.log('Quiz Table creation failed:', process.env.DB, err)
  } else {
    db.query('CREATE TABLE questions (id SERIAL, quiz_id INT, questions TEXT, PRIMARY KEY(id), CONSTRAINT fk_questions FOREIGN KEY(quiz_id) REFERENCES quizzes(id))', (err, res) => {
      if (err) {
        console.log('Questions Table creation error');
      } else {
        db.query("CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, username VARCHAR(255) UNIQUE, profile_img bytea, bio TEXT, salt VARCHAR(255) NOT NULL)", (err, res) => {
          if (err) {
            console.log('this sucks')
          } else {
            console.log('all tables created successfully')
          }
        })
      }
    })
  }
})