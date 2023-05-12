import { useState, useContext } from "react";
import "../styles/take-quiz.css";
import { Container, Button, Typography } from "@mui/material";
import { QuizContext } from "../context/QuizContext";

function Review() {
  const [visible, setVisible] = useState(false);
  const { userAnswers } = useContext(QuizContext);

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
          userAnswers.map((a, index) => (
            <Container key={index}>
              <Typography>{a.value}</Typography>
            </Container>
          ))}
      </>
    )
  );
}

export default Review;
