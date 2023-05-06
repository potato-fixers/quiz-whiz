import "../styles/take-quiz.css";
import { Button } from "@mui/material";

function Answers({ answers }) {
  const ans = [];

  Object.keys(answers).forEach((key) => {
    if (key !== "question") {
      console.log("key", key);
      ans.push(answers[key]);
    }
  });

  return (
    ans && (
      <>
        {ans.map((key, index) => (
          <Button key={index} variant="contained" color="secondary">
            {key}
          </Button>
        ))}
      </>
    )
  );
}

export default Answers;
