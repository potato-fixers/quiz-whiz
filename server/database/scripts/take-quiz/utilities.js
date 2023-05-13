// Reference the Server Dot Env file, instead of global or client Environment Variables
const axios = require('axios');
const pool = require('../../config/index');

const fetch = async (cb) => {
  try {
    //Test out an endpoint
    const { rows } = await pool.query('SELECT * FROM quizzes');
    console.log('FETCH RESULT: ', rows);
    cb(null,  rows);
  } catch (err) {
    cb(err);
  }
};

module.exports = fetch;