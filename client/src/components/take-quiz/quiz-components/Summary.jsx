import { Link } from "react-router-dom";
import { CssBaseline, Typography, Button } from "@mui/material";

import "../styles/take-quiz.css";
import Review from "./Review.jsx";

function Summary() {
  return (
    <>
      <Typography variant="h6">Conditional Message</Typography>
      <Typography variant="h6">
        Congrats! if you scored &gt;70% or Aw, Shucks You Should Probably Study
      </Typography>
      <CssBaseline></CssBaseline>
      <Review />
      <Link to="/quiz/:id/start">
        <Button variant="contained">Retake Quiz</Button>
      </Link>
      <Link to="/dashboard">
        <Button variant="contained">More Quizzes</Button>
      </Link>
    </>
  );
}

export default Summary;
