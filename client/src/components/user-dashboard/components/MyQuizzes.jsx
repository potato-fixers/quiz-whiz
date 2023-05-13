import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';
import ClearIcon from '@mui/icons-material/Clear';
import useQuizzes from '../hooks/useQuizzes';

const MyQuizzes = (props) => {

  const quizzes = useQuizzes('quizzes');

  const handleDelete = (e) => {
    // handle deleting quiz
    console.log('delete');
  };

  return (
    <>
      <Stack direction='row' >
        <Typography variant='h4' sx={{ flexGrow: 1}}>My Quizzes</Typography>
        <FilterBar />
      </Stack>

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
          {quizzes.map((row) => (
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
                {row.type}
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
                <ClearIcon onClick={handleDelete}></ClearIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default MyQuizzes;