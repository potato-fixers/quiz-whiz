import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

import "./styles/take-quiz.css";
import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/Question.jsx";
import Answers from "./quiz-components/Answers.jsx";

function Quiz() {
  return (
    <>
      <Timer />
      <Question />
      <Answers />
      <Typography>2/25 Questions</Typography>

      <Link to="/quiz/:id/question/:id">
        <Button variant="contained" color="primary">
          &lt;
        </Button>
      </Link>

      <Link to="/quiz/:id/question/:id">
        <Button variant="contained" color="primary">
          &gt;
        </Button>
      </Link>
    </>
  );
}

export default Quiz;
