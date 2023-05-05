// import { useEffect } from "react";
import "../styles/take-quiz.css";
import { Typography } from "@mui/material";

function Question({ question }) {
  return (
    question && (
      <>
        <Typography variant="h4">{question}</Typography>
        {/* <div className="test">Try sticking db data in here</div> */}
      </>
    )
  );
}

export default Question;
