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

    correctAs,
    msg,

    score,
    calculateScore,

    // saveHistory,

    finished,
    setFinished,

    duration,
    formatDuration,
  } = useContext(QuizContext);
  const { user, isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    getUserAnswers();
  }, []);

  useEffect(() => {
    calculateScore();
    setFinished(true);

    if (isLoggedIn) {
      // add score to user quiz history
      let payload = {
        user: user,
        score: score,
        quiz_id: quizId,
        duration: formatDuration(duration),
        finished: finished,
      };
      console.log("Saving your score", payload);

      // saveHistory(payload);
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
