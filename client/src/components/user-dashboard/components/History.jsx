import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter'
const Plays = (props) => {

  const quizzes = useQuizzes('history');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);

  const handleLike = (e) => {
    console.log('like/unlike');
  };

  return (
    <>
      <Stack direction='row' >
        <Typography variant='h4' sx={{ flexGrow: 1}}>History</Typography>
        <FilterBar onFilterChange={handleFilterChange} category={filter.category} />
      </Stack>
      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align='center'>Plays</TableCell>
            <TableCell align='center'>Best Score</TableCell>
            <TableCell align='center'>Best Time</TableCell>
            <TableCell align='center'>Finished?</TableCell>
            <TableCell align='right'>Last Played</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                {row.quiz_name}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.category}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.plays}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.score}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.duration}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.finished ? 'v' : ''}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {row.date}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                <FavoriteIcon onClick={handleLike}></FavoriteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default Plays;