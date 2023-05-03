\connect quizwhiz;

BEGIN;

CREATE SCHEMA quizwhiz;

-- ----------------------
-- Quiz Whiz Quizzes
-- ----------------------
CREATE TABLE quizzes(
	id INT, 
	user_id TEXT, 
	category TEXT, 
	difficulty TEXT, 
	quiz_name TEXT, 
	PRIMARY KEY(id)
);

SAVEPOINT quizzes_table_created;

-- ----------------------
-- Quiz Questions
-- ----------------------
CREATE TABLE questions(
	id INT, 
	quiz_id INT, 
	questions TEXT, 
	PRIMARY KEY(id), 
	CONSTRAINT fk_questions 
	FOREIGN KEY(quiz_id) REFERENCES quizzes(id)
);

SAVEPOINT questions_table_created;

CREATE INDEX questions_fk_index ON questions (quiz_id);

SAVEPOINT questions_index_created;

COMMIT;