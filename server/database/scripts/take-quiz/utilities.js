// Reference the Server Dot Env file, instead of global or client Environment Variables
const axios = require('axios');
const pool = require('../../config/index');

const fetch = async (quizId, table, cb) => {
  console.log('Quiz ID is', quizId);

  const query = !quizId ? `
  SELECT * FROM quizzes LIMIT 5` 
  : `SELECT * FROM ${table} WHERE ${table === 'quizzes' ? "id" : "quiz_id"}=${quizId}
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