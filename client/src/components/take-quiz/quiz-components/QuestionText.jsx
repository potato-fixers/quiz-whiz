// import { useEffect } from "react";
import "../styles/take-quiz.css";
import { Typography } from "@mui/material";

function QuestionText({ quizId, question, currentKey }) {
  return (
    question && (
      <>
        <Typography id="question-text" variant="h4">{question}</Typography>
      </>
    )
  );
}

export default QuestionText;
