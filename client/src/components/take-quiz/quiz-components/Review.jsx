import { useState, useContext } from "react";

import "../styles/take-quiz.css";
import { Button, Typography } from "@mui/material";
import { QuizContext } from "../context/QuizContext";

function Review() {
  const [visible, setVisible] = useState(false);
  const { questions, userAnswers } = useContext(QuizContext);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    userAnswers && (
      <>
        <Button onClick={handleClick} variant="contained" color="info">
          Review Your Answers
        </Button>

        {visible &&
          userAnswers.map((a, index) => {
            if (a.key !== "corrAns") {
              return (
                <div
                  key={index}
                  className={a.key === "corrAns" ? "right" : "wrong"}
                >
                  #{index + 1} Your Answer: {a.value}{" "}
                  <Typography sx={{ color: "var(--charcoal)" }}>
                    Correct Answer: {questions[index]["corrAns"]}
                  </Typography>
                  <hr />
                </div>
              );
            } else {
              return (
                <Typography
                  key={index}
                  className={a.key === "corrAns" ? "right" : "wrong"}
                >
                  #{index + 1} Your Answer: {a.value} <hr />
                </Typography>
              );
            }
          })}
      </>
    )
  );
}

export default Review;
