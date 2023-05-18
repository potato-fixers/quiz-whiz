import { useContext } from "react";
import "../styles/take-quiz.css";
import { Button } from "@mui/material";

import { QuizContext } from '../context/QuizContext';

function Answers({ page, answers }) {
  let keys = Object.keys(answers);
  answers = Object.values(answers);
  const { resetStyles } = useContext(QuizContext);

  const handleClick = (e) => {
    let selected = Object.values(e.currentTarget.firstChild)[0].stateNode.data;
    resetStyles();

    keys.forEach((key, index) => {
      if (answers[index] === selected) {
        selected = { key: key, value: selected, question: page };
      }
    });
    localStorage.setItem(`${page}`, JSON.stringify(selected));
    e.currentTarget.setAttribute('style','box-shadow: inset 3px 3px 3px 3px var(--dk-pink);')
  };

  return (
    answers && (
      <>
        {answers.map((key, index) => {
          if (keys[index] !== "question") {
            return (
              <Button
                key={index}
                className='btn'
                variant="contained"
                color="secondary"
                style={{}}
                onClick={handleClick}
              >
                {answers[index]}
              </Button>
            );
          } else return "";
        })}
      </>
    )
  );
}

export default Answers;
