const db = require('../config/index');

const queryString = `
  CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    quiz_id INTEGER NOT NULL REFERENCES quizzes(id),
    liked_at DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT unique_favorite UNIQUE(user_id, quiz_id)
  );
`;

db.query(queryString)
.then(() => {
  console.log('Favorites table created!');
})
.catch(err => {
  console.log(err.stack);
});