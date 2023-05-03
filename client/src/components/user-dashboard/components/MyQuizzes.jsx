import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';

const MyQuizzes = (props) => {

  const dummyData = [
    {id: 1, quiz: 'quiz 1', category: 'Edu', type: 'Multiple choices', plays: 3, likes: 3, createdAt: 'mm/dd/yyyyThh:mm:ss'},
    {id: 2, quiz: 'quiz 2', category: 'Music', type: 'Multiple choices', plays: 1, likes: 3,  createdAt: 'mm/dd/yyyyThh:mm:ss'},
    {id: 3, quiz: 'quiz 3', category: 'Sport', type: 'Multiple choices', plays: 2, likes: 3,  createdAt: 'mm/dd/yyyyThh:mm:ss'},
    {id: 4, quiz: 'quiz 4', category: 'Movie', type: 'Multiple choices', plays: 4, likes: 3,  createdAt: 'mm/dd/yyyyThh:mm:ss'},
    {id: 5, quiz: 'quiz 5', category: 'Sport', type: 'True False', plays: 1, likes: 3,  createdAt: 'mm/dd/yyyyThh:mm:ss'}
  ];

  return (
    <>
      <Typography variant='h5'>My Quizzes</Typography>

      <FilterBar />

      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align='center'>Type</TableCell>
            <TableCell align='center'>Plays</TableCell>
            <TableCell align='center'>Likes</TableCell>
            <TableCell align='right'>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                {row.quiz}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.category}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.type}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.plays}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.likes}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {row.createdAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default MyQuizzes;