import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import useQuizzes from '../hooks/useQuizzes';
import { Link } from 'react-router-dom';

const Overview = (props) => {

  const { quizzes } = useQuizzes('');

  return (
    <>
      <Typography variant='h5'>Recent plays</Typography>

      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Score</TableCell>
            <TableCell align='right'>Last Played</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(quizzes.length &&
            quizzes.map((quiz) => (
            <TableRow
              key={quiz.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                <Link to={`/quiz/${quiz.quiz_id}/start`}> {quiz.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {quiz.score}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {quiz.date}
              </TableCell>
            </TableRow>
          ))) || <TableRow><Typography component='td' align='center'> No quiz found </Typography></TableRow>}
        </TableBody>
      </Table>

    </>
  );
};

export default Overview;