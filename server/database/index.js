require('dotenv').config();
const { Pool, Client} = require('pg');
const db = new Pool ({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.PORT,
})