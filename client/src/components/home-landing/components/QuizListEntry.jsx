import { Link } from 'react-router-dom';
const QuizListEntry = (props) => {
  if (props.quiz.category === props.category || props.category === 'all') {
    let link = `/quiz/${props.quiz.id}/start`;
    return (
      <tr>
        <td id="landing_table_name_td">{props.quiz.quiz_name}</td>
        <td className="landing_table_category">{props.quiz.category}</td>
        <td className="landing_table_difficulty">{props.quiz.difficulty}</td>
        <td className="landing_table_preview"><Link to={link} id="landing_preview_td">Preview</Link></td>
      </tr>
    );
  } else {
    return null;
  }
};

export default QuizListEntry;