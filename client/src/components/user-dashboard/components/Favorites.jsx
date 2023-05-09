import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useEffect } from 'react';

const Favorites = (props) => {

  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async (userId) => {
    const url = process.env.REACT_APP_API_URI;
    const response = await fetch(`${url}/dashboard/favorites`);
    if (response.ok) {
      setQuizzes(await response.json());
    }
  };

  const handleUnlike = (e) => {
    // handle unliking quiz
    console.log('unlike')
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <>
      <Stack direction='row' >
        <Typography variant='h4' sx={{ flexGrow: 1}}>Favorites</Typography>
        <FilterBar />
      </Stack>

      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Total Plays</TableCell>
            <TableCell align='center'>Total Likes</TableCell>
            <TableCell align='right'>Date Liked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quizzes.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                {row.quiz_name}
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