import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import "./styles/take-quiz.css";
import Pagination from "./Pagination.jsx";

import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/Question.jsx";
import Answers from "./quiz-components/Answers.jsx";

function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the Answer to this Question?",
      corrAns: "This one",
      incAns1: "Not this 1",
      incAns2: "Not this 2",
      incAns3: "Not this 3",
    },
    {
      question: "What is the Answer to this T/F Question?",
      corrAns: "True",
      incAns1: "False",
    },
    {
      question: "Uno Mas",
      corrAns: "False",
      incAns1: "True",
    },
  ]);
  const [page, setPage] = useState(1);

  const onPageChange = (val) => {
    console.log("Page changed");
    setPage(val);
  };

  useEffect(() => {}, []);

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
          <Timer />
        </Grid>

        <Grid item xs={6}>
          <Question question={questions[page].question} />
        </Grid>

        <Grid item xs={6}>
          <Answers answers={questions[page]} />
        </Grid>

        <Grid item xs={6}>
          <Typography>2/25 Questions</Typography>
        </Grid>

        <Grid item xs={6}>
          <Link to="/quiz/:id/question/:id">
            <Button variant="contained" color="primary">
              &lt;
            </Button>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to="/quiz/:id/question/:id">
            <Button variant="contained" color="primary">
              &gt;
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid justifyContent="center" direction="row" container>
        <Grid item xs={6}>
          <Pagination
            onPageChange={onPageChange}
            currentPage={page}
            totalCount={3}
            pageSize={1}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Quiz;
