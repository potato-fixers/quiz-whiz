import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import FilterBar from './subComponents/FilterBar.jsx';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import LikeIcon from './subComponents/LikeIcon';

const Plays = (props) => {

  const { quizzes, getQuizzes } = useQuizzes('history');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);
  const { sortedData, sortData } = useSort(filteredData);

  const headersMapping = {
    'Quiz': 'quiz_name',
    'Category': 'category',
    'Plays': 'plays',
    'Best Score': 'score',
    'Best Time': 'duration',
    'Finished?': 'finished',
    'Last Played': 'date'
  };

  const handleClick = (e) => {
    const key = headersMapping[e.target.innerText];
    sortData(key);
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
            <TableCell align='left' onClick={handleClick} >Quiz</TableCell>
            <TableCell align='center' onClick={handleClick} >Category</TableCell>
            <TableCell align='center' onClick={handleClick} >Score</TableCell>
            <TableCell align='center' onClick={handleClick} >Time</TableCell>
            <TableCell align='center' onClick={handleClick} >Finished?</TableCell>
            <TableCell align='right' onClick={handleClick} >Played At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(sortedData.length &&
            sortedData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                <Link to={`/quiz/${row.quiz_id}/start`}> {row.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.category}
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
                <LikeIcon liked={row.liked} quizId={row.quiz_id} getQuizzes={getQuizzes} ></LikeIcon>
              </TableCell>
            </TableRow>
          ))) || <TableRow><Typography component='td' align='center'> No quiz found </Typography></TableRow>}
        </TableBody>
      </Table>

    </>
  );
};

export default Plays;