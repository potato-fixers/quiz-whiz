// Reference the Server Dot Env file, instead of global or client Environment Variables
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `../../../.env`) });
const { Pool } = require('pg');

// DB Connection Config
let DB_URL = process.env.DB_URL;
let DB_USER = process.env.DB_USER;
let DB_PASSWORD = process.env.DB_PASSWORD;
let DB_HOST = process.env.DB_HOST;
let DB_NAME = process.env.DB_NAME;
let DB_PORT = process.env.DB_PORT;

// Connection String Pattern
// schema://user:password@host:port/db_name
// let dbString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
let dbString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
let pool = new Pool({ connectionString: dbString });
pool.connect();

fetch = async (cb) => {

  try {
    // Test out an endpoint
    const { rows } = await pool.query('SELECT * FROM quizzes');
    console.log('FETCH RESULT: ', rows);
    cb(null,  rows);
  } catch (err) {
    cb(err);
  }

};

module.exports = fetch;