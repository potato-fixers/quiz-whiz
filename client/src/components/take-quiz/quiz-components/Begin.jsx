import "../styles/take-quiz.css";
import { Typography, Button } from "@mui/material";

function Begin() {
  return (
    <>
      <Typography>Ready to Start?</Typography>
      <Typography>Set Timer Option Here?</Typography>
      <hr />
      <Typography>FROM DATABASE: Quiz Category here</Typography>
      <Typography>FROM DATABASE: Quiz Difficulty here</Typography>

      <Button variant="contained" color="primary">
        Begin Quiz
      </Button>
      <Button variant="contained" color="secondary">
        Back to Browse
      </Button>
    </>
  );
}

export default Begin;
