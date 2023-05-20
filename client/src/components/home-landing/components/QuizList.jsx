import QuizListEntry from './QuizListEntry.jsx';
import { TableCell, TableHead, TableBody, TableRow, Table } from '@mui/material';

const QuizList = (props) => (
  <Table className="landing_quiz_table" sx={{ width: '100%'}} aria-label='simple table'>
    <TableHead >
      <TableRow>
        <TableCell align='center' sx={{ fontSize: 14 }}>Name</TableCell>
        <TableCell align='center' sx={{ fontSize: 14 }}>Category</TableCell>
        <TableCell align='center' sx={{ fontSize: 14 }}>Difficulty</TableCell>
        <TableCell align='center' sx={{ fontSize: 14 }}> </TableCell>
      </TableRow>
    </TableHead>
      <TableBody>
        {props.quizzes.map((quiz, index) => <QuizListEntry quiz={quiz} key={quiz.id} category={props.category}/>)}
      </TableBody>
  </Table>
);


export default QuizList;