import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

import "../styles/take-quiz.css";
import Review from "./Review.jsx";

function Summary() {
  const [msg, setMsg] = useState("Default -- You Haven't Take a Test");
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(80);
  }, []);

  useEffect(() => {
    if (score > 60) {
      setMsg("Congratulations, You Passed! Try out one of our other quizzes!");
    } else if (score <= 60) {
      setMsg("Oh no! You didn't pass, would you like to try again?");
    } else {
      setMsg("Oh no! You ran out of time. Take another stab at it?");
    }
  }, [score]);

  return (
    <>
      <Typography variant="h6">Conditional Message</Typography>
      <Typography variant="h6">{msg && msg}</Typography>
      <Review />
      <Link to="/quiz/:id/start">
        <Button variant="contained">Retake Quiz</Button>
      </Link>
      <Link to="/dashboard">
        <Button variant="contained">More Quizzes</Button>
      </Link>
    </>
  );
}

export default Summary;
