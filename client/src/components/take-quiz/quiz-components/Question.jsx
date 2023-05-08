// import { useEffect } from "react";
import "../styles/take-quiz.css";
import { Typography } from "@mui/material";

function Question({ question }) {
  return (
    question && (
      <>
        <Typography variant="h4">{question}</Typography>
      </>
    )
  );
}

export default Question;
