import { useState, useEffect, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import "./styles/take-quiz.css";
import Pagination from "./Pagination.jsx";

import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/Question.jsx";
import Answers from "./quiz-components/Answers.jsx";

import { QuizContext } from "./context/QuizContext";
// import useFetch from "./hooks/useFetch.jsx";

function Quiz({ time, quizId }) {
  const [page, setPage] = useState(1);
  const { questions, setQuestions } = useContext(QuizContext);
  // const { questions, setQuestions, questionAnswers } = useFetch(quizId);

  const onPageChange = (val) => {
    setPage(val);
  };

  useEffect(() => {
    questions && setQuestions(questions);
    // questions && console.log("Qs (keys?)", questions);
  }, [questions, setQuestions]);

  return (
    <>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        direction="column"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Timer id={quizId} time={time} />
        </Grid>

        <Grid item xs={6}>
          <Question
            quizId={quizId}
            question={questions[page - 1].question}
            currentKey={questions[page - 1]}
          />
        </Grid>

        <Grid item xs={6}>
          <Answers page={page} answers={questions[page - 1]} />
        </Grid>

        <Grid item xs={6}>
          <Typography>
            {page}/{questions.length} Questions
          </Typography>
        </Grid>
      </Grid>

      <Grid justifyContent="center" direction="row" container>
        <Grid item xs={6}>
          <Pagination
            onPageChange={onPageChange}
            currentPage={page}
            totalQuestions={questions.length}
            pageSize={1}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Quiz;
