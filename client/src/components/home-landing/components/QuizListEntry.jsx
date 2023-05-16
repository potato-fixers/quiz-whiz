import { Link } from 'react-router-dom';
const QuizListEntry = (props) => {
  if (props.quiz.category === props.category || props.category === 'all') {
    let link = `/quiz/${props.quiz.id}/start`;
    return (
      <tr>
        <td>{props.quiz.quiz_name}</td>
        <td>{props.quiz.category}</td>
        <td>{props.quiz.difficulty}</td>
        <td>{props.quiz.type}</td>
        <td><Link to={link} >Preview</Link></td>
      </tr>
    );
  } else {
    return null;
  }
};

export default QuizListEntry;