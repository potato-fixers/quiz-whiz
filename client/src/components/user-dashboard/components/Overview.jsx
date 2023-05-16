import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import { Link } from 'react-router-dom';
import useQuizzes from '../hooks/useQuizzes';

const Overview = (props) => {

  const quizzes = useQuizzes('');

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
        {
          (quizzes.length
          &&
          <TableBody>
            {quizzes.map((quiz) => (
              <TableRow
                key={quiz.id}
              >
                <TableCell align='left' sx={{ border: 0 }}>
                <Link to={`/quiz/${quiz.id}/start`}> {quiz.quiz_name} </Link>
                </TableCell>
                <TableCell align='center' sx={{ border: 0 }}>
                  {quiz.score}
                </TableCell>
                <TableCell align='right' sx={{ border: 0 }} >
                  {quiz.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>)
          ||
          <Typography variant='subtitle1' align='center'>  No quiz found </Typography>
        }
      </Table>

    </>
  );
};

export default Overview;