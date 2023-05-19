import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import FilterBar from './subComponents/FilterBar';
import ClearIcon from '@mui/icons-material/Clear';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import { useContext } from 'react';
import { UserContext } from '../../global/UserContext';
import { CountsContext } from '../context/CountsContext';

const MyQuizzes = (props) => {

  const { quizzes, getQuizzes } = useQuizzes('quizzes');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);
  const { sortedData, sortData } = useSort(filteredData);
  const { profile } = useContext(UserContext);
  const { getCounts } = useContext(CountsContext);

  const headersMapping = {
    'Quiz': 'quiz_name',
    'Category': 'category',
    'Type': 'type',
    'Plays': 'plays',
    'Likes': 'likes',
    'Created At': 'created_at'
  };

  // handle deleting quiz
  const handleDelete = async (quizId) => {
    const endpoint = `${process.env.REACT_APP_API_URI}/dashboard/quizzes/${quizId}`;
    try {
      const response = await fetch(endpoint, {method: 'delete'})
      if (response.ok) {
        getQuizzes(profile.userId);
        getCounts(profile.userId);
      }
    } catch (err) {
      console.error(err.stack);
      alert('Failed to delete quiz');
    }
  };

  const handleClick = (e) => {
    const key = headersMapping[e.target.innerText];
    sortData(key);
  };

  return (
    <>
      <Stack direction='row' >
        <Typography variant='h4' sx={{ flexGrow: 1}}>My Quizzes</Typography>
        <FilterBar onFilterChange={handleFilterChange} category={filter.category} />
      </Stack>

      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align='left' onClick={handleClick} >Quiz</TableCell>
            <TableCell align='center' onClick={handleClick} >Category</TableCell>
            <TableCell align='center' onClick={handleClick} >Plays</TableCell>
            <TableCell align='center' onClick={handleClick} >Likes</TableCell>
            <TableCell align='right' onClick={handleClick} >Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(sortedData.length &&
            sortedData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                <Link to={`/quiz/${row.id}/start`}> {row.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.category}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.plays}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.likes}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {row.created_at}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                <ClearIcon onClick={() => handleDelete(row.id)}></ClearIcon>
              </TableCell>
            </TableRow>
          ))) || <TableRow><Typography component='td' align='center'> No quiz found </Typography></TableRow>}
        </TableBody>
      </Table>

    </>
  );
};

export default MyQuizzes;