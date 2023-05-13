import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';

const Favorites = (props) => {

  const quizzes = useQuizzes('favorites');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);
  const { sortedData, sortData } = useSort(filteredData);

    const headersMapping = {
    'Quiz': 'quiz_name',
    'Category': 'category',
    'Total Plays': 'totalPlays',
    'Total Likes': 'totalLikes',
    'Date Liked': 'date',
  };

  const handleUnlike = (e) => {
    // handle unliking quiz
    console.log('unlike')
  };

    const handleClick = (e) => {
    const key = headersMapping[e.target.innerText];
    sortData(key);
  };

  return (
    <>
      <Stack direction='row' >
        <Typography variant='h4' sx={{ flexGrow: 1}}>Favorites</Typography>
        <FilterBar onFilterChange={handleFilterChange} category={filter.category} />
      </Stack>

      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align='left' onClick={handleClick} >Quiz</TableCell>
            <TableCell align='center' onClick={handleClick} >Category</TableCell>
            <TableCell align='center' onClick={handleClick} >Total Plays</TableCell>
            <TableCell align='center' onClick={handleClick} >Total Likes</TableCell>
            <TableCell align='right' onClick={handleClick} >Date Liked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
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
                {row.totalPlays}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.totalLikes}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }}>
                {row.date}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                <FavoriteIcon onClick={handleUnlike}></FavoriteIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default Favorites;