const db = require('../config/index');

const createTableQuery = `
CREATE TABLE users_session (
  id SERIAL PRIMARY KEY,
  session VARCHAR(64) NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT (CURRENT_TIMESTAMP + INTERVAL '24 hours'),
  CONSTRAINT session_expiration CHECK (expires_at > created_at)
);
`;

db.query(createTableQuery)
  .then(() => {
    console.log('success at create users_sessions')
  })
  .catch((err) => {
    console.error(err);
  })