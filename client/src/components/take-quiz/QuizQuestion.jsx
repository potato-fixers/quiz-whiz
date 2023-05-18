import { useState, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import "./styles/take-quiz.css";
import Pagination from "./Pagination.jsx";

// Components
import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/QuestionText.jsx";
import Answers from "./quiz-components/Answers.jsx";

// Context
import { QuizContext } from "./context/QuizContext";

function QuizQuestion() {
  const [page, setPage] = useState(1);
  const { id, questions } = useContext(QuizContext);

  const onPageChange = (val) => {
    setPage(val);
  };

  if (questions.length > 1) {
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
            <Timer id={id} />
          </Grid>

          <Grid item xs={6}>
            <Question
              quizId={id}
              question={questions && questions[page - 1].question}
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
              quizId={id}
              onPageChange={onPageChange}
              currentPage={page}
              totalQuestions={questions.length}
              pageSize={1}
            />
          </Grid>
        </Grid>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default QuizQuestion;
