import '../styles/take-quiz.css';
import { Container, Typography, Button } from '@mui/material';

function Summary() {
  return (
    <>
        <Typography variant="h6">Conditional Message</Typography>
        <Typography variant="h6">Congrats! if you scored &gt;70% or Aw, Shucks You Should Probably Study</Typography>
        <Container variant="h4">Review Your Answers</Container>
        <Button variant="h4">Retake Quiz</Button>
        <Button variant="h4">More Quizzes</Button>
    </>
  );
}

export default Summary;