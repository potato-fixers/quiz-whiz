import { useEffect } from "react";
import useTimer from "../hooks/useTimer";

import "../styles/take-quiz.css";
import { Typography } from "@mui/material";

function Timer({ id }) {
  const { time, setTimer } = useTimer();

  useEffect(() => {
    setTimer(time);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="timer">
      <Typography variant="h6"></Typography>
    </div>
  );
}

export default Timer;
