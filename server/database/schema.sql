\connect quizwhiz;

BEGIN;

CREATE SCHEMA quizwhiz;

-- ----------------------
-- QUIZZES TABLE
-- ----------------------

CREATE TABLE quizzes(
  id SERIAL,
  user_id TEXT,
  category TEXT,
  difficulty TEXT,
  quiz_name TEXT,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  PRIMARY KEY(id)
);

SAVEPOINT quizzes_table_created;

-- ----------------------
-- QUESTIONS TABLE
-- ----------------------
CREATE TABLE questions(
  id SERIAL,
  quiz_id INT,
  questions TEXT,
  PRIMARY KEY(id),
  CONSTRAINT fk_questions
  FOREIGN KEY(quiz_id)
  REFERENCES quizzes(id)
);

SAVEPOINT questions_table_created;

CREATE INDEX questions_fk_index ON questions (quiz_id);
SAVEPOINT questions_fk_index_created;

-- ----------------------
-- USERS TABLE
-- ----------------------
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE,
  profile_img bytea,
  bio TEXT,
  salt VARCHAR(255) NOT NULL
);

SAVEPOINT users_table_created;

-- ----------------------
-- HISTORY TABLE
-- ----------------------
CREATE TABLE history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id),
    quiz_id INTEGER REFERENCES quizzes (id),
    score INTEGER,
    duration INTERVAL,
    finished BOOLEAN,
    date DATE
);

SAVEPOINT history_table_created;

CREATE INDEX history_user_id_index ON history(user_id);
SAVEPOINT history_user_id_indexcreated;

CREATE INDEX history_quiz_id_index ON history(quiz_id);
SAVEPOINT history_quiz_id_index_created;

-- ----------------------
-- FAVORITES TABLE
-- ----------------------
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    quiz_id INTEGER NOT NULL REFERENCES quizzes(id),
    liked_at DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT unique_favorite UNIQUE(user_id, quiz_id)
);

SAVEPOINT favorites_table_created;

CREATE INDEX favorites_user_index ON favorites(user_id);
SAVEPOINT favorites_user_index_created;

CREATE INDEX favorites_quiz_id_index ON favorites(quiz_id);
SAVEPOINT favorites_quiz_id_index_created;

COMMIT;