import './styles/take-quiz.css';
import Question from './quiz-components/Question.jsx';
import Answers from './quiz-components/Answers.jsx';

function Quiz() {
  return (
    <>
      <Question />
      <Answers />
    </>
  );
}

export default Quiz;