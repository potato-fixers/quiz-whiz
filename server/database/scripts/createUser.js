const db = require('../config/index');

const createTableQuery = `
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE,
    profile_img VARCHAR(255),
    bio TEXT,
    salt VARCHAR(255) NOT NULL
  );
`;

db.query(createTableQuery)
.then (() => {
  console.log('success at creating users table')
})
.catch((err) => {
  console.error(err);
})