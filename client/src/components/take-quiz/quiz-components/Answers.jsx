import { useState, useEffect } from "react";
import "../styles/take-quiz.css";
import { Button } from "@mui/material";

function Answers({ page, answers }) {
  const [ans, setAns] = useState([]);
  useEffect(() => {
    Object.keys(answers).forEach((key) => {
      if (key !== "question") {
        console.log("key", key);
        setAns((prev) => [...prev, answers[key]]);
      }
    });
  }, [answers]);

  const handleClick = (e) => {
    let selected = Object.values(e.currentTarget.firstChild)[0].stateNode.data;
    // let key = Object.keys(e.currentTarget.firstChild)[0].stateNode.data;
    // answer[key] = selected;
    // console.log("Saving your answer for the current Question", answer);
    localStorage.setItem(`Question ${page} Answer`, selected);
  };

  return (
    ans && (
      <>
        {ans.map((key, index) => (
          <Button
            key={index}
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            {key}
          </Button>
        ))}
      </>
    )
  );
}

export default Answers;
