import "../styles/take-quiz.css";

import { useEffect, useLayoutEffect, useContext } from "react";
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

    correctAs,
    msg,

    score,
    calculateScore,

    saveHistory,

    finished,
    setFinished,

    duration,
    formatDuration,
    calculateDuration
  } = useContext(QuizContext);
  const { user, profile, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getUserAnswers();
    // eslint-disable-next-line
  }, []);


  useLayoutEffect(() => {

    if (isLoggedIn) {
      console.log(`User ${user}is logged in? ${isLoggedIn}`);
      // add score to user quiz history
      console.log(`Duration Pyload: ${duration}`);
      let payload = {
        user: profile.userId,
        score: score,
        quiz_id: quizId,
        duration: duration,
        finished: finished,
      };
      console.log("Saving your score", payload);

      saveHistory(payload);
    }
  }, [isLoggedIn]);

  useLayoutEffect(() => {
    setFinished(true);
    calculateDuration();
    calculateScore();
    // eslint-disable-next-line
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
