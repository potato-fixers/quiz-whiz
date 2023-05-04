import "./styles/take-quiz.css";
import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/Question.jsx";
import Answers from "./quiz-components/Answers.jsx";
import { Typography, Button } from "@mui/material";

function Quiz() {
  return (
    <>
      <Timer />
      <Question />
      <Answers />
      <Typography>2/25 Questions</Typography>

      <Button>&lt;</Button>
      <Button>&gt;</Button>
    </>
  );
}

export default Quiz;
