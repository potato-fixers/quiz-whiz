import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack, Grid } from '@mui/material';
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
    'quiz': 'quiz_name',
    'category': 'category',
    'plays': 'plays',
    'score (%)': 'score',
    'time (m)': 'duration',
    'played at': 'date'
  };

  const handleClick = (e) => {
    const key = headersMapping[e.target.innerText.toLowerCase()];
    sortData(key);
  };

  const headers = ['Quiz', 'Category', 'Score (%)', 'Time (m)', 'Played At'];
  const noBorder = {border: 0};
  const inherit = { color: 'inherit', textDecoration: 'inherit', fontWeight: 'bold'};

  return (
    <Grid>
      <Stack direction='row' >
        <Typography variant='h5' sx={{ flexGrow: 1}}>History</Typography>
        <FilterBar onFilterChange={handleFilterChange} category={filter.category} />
      </Stack>
      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow hover={true}>
            {headers.map((header, idx) => {
              const alignment = idx < 1 ? 'left' : idx === headers.length - 1 ? 'right' : 'center';
              return <TableCell key={idx} align={alignment} onClick={handleClick} >
              <Typography variant='h6'> {header} </Typography>
            </TableCell>
            })}
            <TableCell> {/*Placeholder*/} </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(sortedData.length &&
            sortedData.map((row) => (
            <TableRow
              key={row.id}
              hover={true}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                <Link to={`/quiz/${row.quiz_id}/start`} style={inherit}> {row.quiz_name} </Link>
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
              {/* <TableCell align='center' sx={{ border: 0 }}>
                {row.finished ? 'v' : ''}
              </TableCell> */}
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

    </Grid>
  );
};

export default Plays;