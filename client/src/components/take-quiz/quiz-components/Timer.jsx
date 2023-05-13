import { useEffect, useContext } from "react";

import "../styles/take-quiz.css";
import { Typography } from "@mui/material";
import { QuizContext } from "../context/QuizContext";

function Timer({ id }) {
  const { time, setTimer } = useContext(QuizContext);

  useEffect(() => {
    setTimer(time);
  }, [time, setTimer]);

  return (
    <div id="timer">
      <Typography variant="h6"></Typography>
    </div>
  );
}

export default Timer;
