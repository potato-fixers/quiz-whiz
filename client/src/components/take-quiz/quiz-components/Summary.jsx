import "../styles/take-quiz.css";

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";

import Review from "./Review.jsx";

import { QuizContext } from "../context/QuizContext";
import { UserContext } from "../../global/UserContext";

function Summary({ quizId }) {
  const {
    resetQuiz,

    userAnswers,
    getUserAnswers,

    getCorrectAnswerCount,
    correctAs,

    msg,

    score,
    setScore,

    saveHistory,

    finished,
    setFinished,

    duration,
    setDuration,
  } = useContext(QuizContext);
  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getUserAnswers();
  }, []);

  const calculateScore = () => {
    getCorrectAnswerCount();

    let score = (correctAs / localStorage.length) * 100;

    if (isNaN(score)) {
      setScore(0);
    } else {
      setScore(Math.floor(score));
    }
  };

  useEffect(() => {
    calculateScore();
    if (isLoggedIn) {
      console.log("Saving your score");

      // add score to user quiz history
      // let payload = {
      //   user: user,
      //   score: score,
      //   quiz_id: quizId,
      //   duration: duration,
      //   finished: finished | false,
      // };
      // saveHistory(payload);
    } else {
      console.log("Thanks for trying us out");
    }
  }, [userAnswers, correctAs]);

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
        <Typography variant="h6">{msg && msg}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4">{score && score}%</Typography>
      </Grid>

      <Grid item xs={6}>
        <Review userAnswers={userAnswers} />
      </Grid>

      <Grid item xs={6}>
        <Link to={`/quiz/${quizId}/start`}>
          <Button onClick={resetQuiz} variant="contained">
            Retake Quiz
          </Button>
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Link to="/">
          <Button onClick={resetQuiz} variant="contained">
            More Quizzes
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Summary;
