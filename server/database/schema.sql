\connect quizwhiz;

BEGIN;

CREATE SCHEMA quizwhiz;

-- ----------------------
-- QUESTIONS TABLE
-- ----------------------
CREATE TABLE questions(
	id SERIAL PRIMARY KEY,
	-- product_id VARCHAR(255) NOT NULL,
	-- question_body VARCHAR(255),
	-- question_date BIGSERIAL,
	-- asker_name VARCHAR(255) NOT NULL,
	-- asker_email VARCHAR(255) NOT NULL,
	-- question_helpfulness INT,
	-- reported BOOLEAN
);

SAVEPOINT questions_table_created;

CREATE INDEX q_id_index ON questions (id);

SAVEPOINT q_index_created;

-- ----------------------
-- QUIZZES TABLE
-- ----------------------
CREATE TABLE quizzes(
	id SERIAL PRIMARY KEY,
	-- product_id VARCHAR(255) NOT NULL,
	-- question_body VARCHAR(255),
	-- question_date BIGSERIAL,
	-- asker_name VARCHAR(255) NOT NULL,
	-- asker_email VARCHAR(255) NOT NULL,
	-- question_helpfulness INT,
	-- reported BOOLEAN
);

SAVEPOINT questions_table_created;

CREATE INDEX q_id_index ON questions (id);

SAVEPOINT q_index_created;

COMMIT;