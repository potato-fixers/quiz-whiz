import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";

import "../styles/take-quiz.css";
import Review from "./Review.jsx";
import { QuizContext } from "../context/QuizContext";

function Summary({ quizId }) {
  const {
    clearAnswers,
    userAnswers,
    getUserAnswers,
    getCorrectAnswerCount,
    correctAs,
    msg,
    setMsg,
    score,
    setScore,
  } = useContext(QuizContext);

  useEffect(() => {
    getUserAnswers();
  }, []);

  useEffect(() => {
    if (score > 60) {
      setMsg("Congratulations, You Passed! Try out one of our other quizzes?");
    } else if (score <= 60) {
      setMsg("Oh no! You didn't pass, would you like to try again?");
    } else {
      setMsg("Oh no! You ran out of time. Take another stab at it?");
    }
  }, [score, setMsg]);

  useEffect(() => {
    getCorrectAnswerCount();
    let score = (correctAs / localStorage.length) * 100;
    setScore(Math.floor(score));
  }, [userAnswers, correctAs, getCorrectAnswerCount, setScore]);

  useEffect(() => {
    console.log("Score is:", score + "%");
  }, [score]);

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      direction="column"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6}>
        <Typography variant="h6">Conditional Message</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h6">{msg && msg}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4">{score && score}%</Typography>
      </Grid>

      <Grid item xs={6}>
        <Review answers={userAnswers} />
      </Grid>

      <Grid item xs={6}>
        <Link to={`/quiz/${quizId}/start`}>
          <Button onClick={clearAnswers} variant="contained">
            Retake Quiz
          </Button>
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Link to="/dashboard">
          <Button onClick={clearAnswers} variant="contained">
            More Quizzes
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Summary;
