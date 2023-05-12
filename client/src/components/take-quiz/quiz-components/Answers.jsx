import { useState, useEffect } from "react";
import "../styles/take-quiz.css";
import { Button } from "@mui/material";

function Answers({ page, answers }) {
  let keys = Object.keys(answers);
  answers = Object.values(answers);

  const handleClick = (e) => {
    let selected = Object.values(e.currentTarget.firstChild)[0].stateNode.data;
    keys.forEach((key, index) => {
      if (answers[index] === selected) {
        // console.log("Selected Key", answers[index], selected, key);
        selected = key;
      }
    });
    // console.log("Saving your answer for the current Question", answer);
    localStorage.setItem(`${page}`, selected);
  };

  return (
    answers && (
      <>
        {answers.map((key, index) => {
          if (keys[index] !== "question") {
            return (
              <Button
                key={index}
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                {answers[index]}
              </Button>
            );
          }
        })}
      </>
    )
  );
}

export default Answers;
