import { Link } from 'react-router-dom';
import { TableCell, TableRow } from '@mui/material';


const QuizListEntry = (props) => {
  if (props.quiz.category === props.category || props.category === 'all') {
    let link = `/quiz/${props.quiz.id}/start`;
    return (
        <TableRow sx={{ width: '100%' }} aria-label='simple table'>
          <TableCell align='left' sx={{ border: 0, fontSize: 20 }}>
            {props.quiz.quiz_name}
          </TableCell>
          <TableCell align='center' sx={{ border: 0, fontSize: 20 }}>
            {props.quiz.category}
          </TableCell>
          <TableCell align='center' sx={{ border: 0, fontSize: 20 }} >
            {props.quiz.difficulty}
          </TableCell>
          <TableCell align='center' sx={{ border: 0, fontSize: 20 }} >
            <Link to={link} id="landing_preview_td">Take Quiz</Link>
          </TableCell>
        </TableRow>
    );
  } else {
    return null;
  }
};

export default QuizListEntry;