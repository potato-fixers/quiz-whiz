import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter';

const Favorites = (props) => {

  const quizzes = useQuizzes('favorites');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);


  const handleUnlike = (e) => {
    // handle unliking quiz
    console.log('unlike')
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
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align='center'>Total Plays</TableCell>
            <TableCell align='center'>Total Likes</TableCell>
            <TableCell align='right'>Date Liked</TableCell>
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