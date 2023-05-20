import QuizListEntry from './QuizListEntry.jsx';
import { TableCell, TableHead, TableBody, TableRow, Table } from '@mui/material';

const QuizList = (props) => (
  <Table className="landing_quiz_table" sx={{ width: '100%'}} aria-label='simple table'>
    <TableHead >
      <TableRow>
        <TableCell align='center' sx={{ fontSize: 20 }}>Name</TableCell>
        <TableCell align='center' sx={{ fontSize: 30 }}>Category</TableCell>
        <TableCell align='center' sx={{ fontSize: 30 }}>Difficulty</TableCell>
        <TableCell align='center' sx={{ fontSize: 30 }}> </TableCell>
      </TableRow>
    </TableHead>
      <TableBody>
        {props.quizzes.map((quiz, index) => <QuizListEntry quiz={quiz} key={quiz.id} category={props.category}/>)}
      </TableBody>
  </Table>
);


export default QuizList;