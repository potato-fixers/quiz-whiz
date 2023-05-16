//               Middleware Functions               //
const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);
const pgPool = require('../database/config/index');
const cookie_secret = process.env.COOKIE_SECRET || 'pass';

module.exports = expressSession({
  store: new pgSession({
    pool: pgPool,
    createTableIfMissing: true,
  }),
  secret: cookie_secret,
  resave: false,
  cookie: {
    maxAge: 24*60*60*1000,
    secure: false //if https must set to true;
  }, //expires in 5 minutes  for development purposes
  saveUninitialized: true
})