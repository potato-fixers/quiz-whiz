import '../styles/take-quiz.css';
import { Typography, Button } from '@mui/material';

function Begin() {
  return (
    <>
      <Typography>Ready to Start?</Typography>
      <Typography>Set Timer Option Here?</Typography>

      <Button variant="h4">Begin Quiz</Button>
      <Button variant="h4">Back to Browse</Button>
    </>
  );
}

export default Begin;