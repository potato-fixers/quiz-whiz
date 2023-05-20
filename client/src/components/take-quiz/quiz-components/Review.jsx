import { useState, useContext } from "react";

import "../styles/take-quiz.css";
import { Button, Typography } from "@mui/material";
import { QuizContext } from "../context/QuizContext";

function Review() {
  const [visible, setVisible] = useState(false);
  const { questions, userAnswers } = useContext(QuizContext);

  userAnswers.filter((a, b) => a.question > b.question ? b : a);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    userAnswers && (
      <>
        <Button onClick={handleClick} variant="contained" color="info">
          Review Your Answers
        </Button>
        <div className="review">
          {visible &&
            userAnswers.map((a, index) => {
              if (a.key !== "corrAns") {
                return (
                  <div
                    key={index}
                    className={a.key === "corrAns" ? "review-item right" : "review-item"}
                  >
                    #{a.question} Your Answer: {a.value}{" "}
                    <Typography sx={{ color: "var(--green)" }}>
                      Correct Answer: {questions[index]["corrAns"]}
                    </Typography>
                    <hr />
                  </div>
                );
              } else {
                return (
                  <div key={index}>
                    <Typography
                      className={a.key === "corrAns" ? "review-item right" : "review-item"}
                    >
                      #{index + 1} Your Answer: {a.value}
                    </Typography>
                    <hr />
                  </div>
                );
              }
            })}

        </div>
      </>
    )
  );
}

export default Review;
