const db = require('../config/index');
require('dotenv').config();

const createTableQuery = "CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, username VARCHAR(255) UNIQUE, profile_img bytea, bio TEXT, salt VARCHAR(255) NOT NULL)"

// const createPartialIndex = `
//   CREATE UNIQUE INDEX ON users (username)
//   WHERE username <> '';
// `;

db.query(createTableQuery)
.then (() => {
  console.log('success at creating users table')
  // return db.query(createPartialIndex)
})
.then(() => {
  console.log('suceess at creating partial index for usernames')
})
.catch((err) => {
  console.error(process.env.DB_HOST, err);
})
