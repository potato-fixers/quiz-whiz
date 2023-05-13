import { Link } from 'react-router-dom';
const QuizListEntry = (props) => {

  if (props.quiz.category === props.category) {
    return (
      <tr>
        <td>{props.quiz.question}</td>
        <td>{props.quiz.category}</td>
        <td>{props.quiz.difficulty}</td>
        <td>{props.quiz.type}</td>
        <td><Link to='/quiz/:id/*' >Preview</Link></td>
      </tr>
    );
  } else {
    return null;
  }
};

export default QuizListEntry;