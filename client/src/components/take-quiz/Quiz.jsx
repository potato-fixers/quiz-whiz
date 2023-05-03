import './styles/take-quiz.css';
import Timer from './quiz-components/Timer.jsx';
import Question from './quiz-components/Question.jsx';
import Answers from './quiz-components/Answers.jsx';
<<<<<<< Updated upstream
import { Typography, Button } from '@mui/material';
=======
import { Typography } from '@mui/material';
>>>>>>> Stashed changes

function Quiz() {
  return (
    <>
      <Timer />
      <Question />
      <Answers />
      <Typography>2/25 Questions</Typography>
      
<<<<<<< Updated upstream
      <Button>&lt;</Button>
      <Button>&gt;</Button>
=======
      <>&lt;</>
      <>&gt;</>
>>>>>>> Stashed changes
    </>
  );
}

export default Quiz;