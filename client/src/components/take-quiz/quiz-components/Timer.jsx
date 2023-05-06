import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/take-quiz.css";
import { Typography } from "@mui/material";

function Timer() {
  const navigate = useNavigate();

  useEffect(() => {
    /* check if element exists  */
    let timer = document.getElementById("timer");

    if (timer) {
      /* countdown timer for quizzes, starts when Question Page loads  */
      let timeRemaining = 300000;

      var downloadTimer = setInterval(() => {
        timer.innerHTML = `${Math.floor(
          (timeRemaining / 1000 / 60) << 0
        )} : ${Math.floor((timeRemaining / 1000) % 60)} left`;
        timeRemaining -= 1000;

        if (timeRemaining <= 0) {
          clearInterval(downloadTimer);
          timer.innerHTML = "<strong>Oh no! Your Time Is Up!</strong>";
          navigate("/quiz/:id/summary");
        }
      }, 1000);
    } else {
      console.log("Uh-oh! Timer Element is Missing");
    }
  });

  return (
    <div id="timer">
      <Typography variant="h6">Ready...Set....GO!</Typography>
    </div>
  );
}

export default Timer;
