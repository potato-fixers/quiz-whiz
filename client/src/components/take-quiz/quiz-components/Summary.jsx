import "../styles/take-quiz.css";
import { CssBaseline, Typography, Button } from "@mui/material";
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
      <Button variant="h4">Retake Quiz</Button>
      <Button variant="h4">More Quizzes</Button>
    </>
  );
}

export default Summary;
