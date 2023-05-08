// Reference the Server Dot Env file, instead of global or client Environment Variables
const axios = require('axios');
const pool = require('../../config/index');

fetch = async (quizId, cb) => {
  console.log('Quiz ID is', quizId);

  const query = !quizId ? `
  SELECT * FROM quizzes LIMIT 5` 
  : `SELECT * FROM quizzes WHERE id=${quizId}
  `; 

  try {
    console.log('Query String Was:', query);
    const { rows } = await pool.query(query);
    console.log('Take Quiz Fetch Result: ', rows);
    cb(null,  rows);
  } catch (err) {
    cb(err);
  }
};

module.exports = fetch;