import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import { useState, useEffect } from 'react';

const Overview = (props) => {

  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async (userId) => {
    const url = process.env.REACT_APP_API_URI;
    const response = await fetch(`${url}/dashboard/`);
    if (response.ok) {
      setQuizzes(await response.json());
    }
  };

  useEffect(() => {
    getQuizzes();
  }, []);

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
          {quizzes.map((quiz) => (
            <TableRow
              key={quiz.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                {quiz.quiz_name}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {quiz.score}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {quiz.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default Overview;