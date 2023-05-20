import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Stack, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import FilterBar from './subComponents/FilterBar.jsx';
import useQuizzes from '../hooks/useQuizzes';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import LikeIcon from './subComponents/LikeIcon';
import useDeviceDetect from '../hooks/useDeviceDetect';

const Plays = (props) => {

  const { quizzes, getQuizzes } = useQuizzes('history');
  const { filteredData, handleFilterChange, filter } = useFilter(quizzes);
  const { sortedData, sortData } = useSort(filteredData);
  const { isMobile } = useDeviceDetect();

  const headersMapping = {
    'quiz': 'quiz_name',
    'category': 'category',
    'plays': 'plays',
    'score (%)': 'score',
    'time (m)': 'duration',
    'played at': 'date'
  };

  const handleClick = (e) => {
    const text = e.target.innerText || '';
    const key = headersMapping[text.toLowerCase()];
    sortData(key);
  };

  const headers = ['Quiz', 'Category', 'Score (%)', 'Time (m)', 'Played At'];
  const responsiveHeaderStyles = isMobile ? {fontSize: '0.8rem'} : {fontSize: '1.5rem'};
  const responsiveStyles = isMobile ? {border:0, fontSize: '0.65rem'} : {border: 0, fontSize: '1.1rem'};
  const inherit = { color: 'inherit', textDecoration: 'inherit', fontWeight: 'bold'};

  return (
    <Grid>
      <Stack direction='row' >
        <Typography variant='h5' sx={{ flexGrow: 1}}>History</Typography>
        <FilterBar onFilterChange={handleFilterChange} category={filter.category} />
      </Stack>
      <Table aria-label='simple table' padding={isMobile ? 'none' : 'normal'}>
        <TableHead >
          <TableRow hover={true}>
            {headers.map((header, idx) => {
              const alignment = idx < 1 ? 'left' : idx === headers.length - 1 ? 'right' : 'center';
              return <TableCell key={idx} align={alignment} onClick={handleClick} >
              <Typography variant='h6' sx={responsiveHeaderStyles}> {header} </Typography>
            </TableCell>
            })}
            <TableCell> {/*Placeholder*/} </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(sortedData.length &&
            sortedData.map((row, idx) => (
            <TableRow
              key={row.id}
              hover={true}
              className={ idx % 2 === 0 ? 'stripe': '' }
            >
              <TableCell align='left' sx={responsiveStyles}>
                <Link to={`/quiz/${row.quiz_id}/start`} style={inherit}> {row.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={responsiveStyles}>
                {row.category}
              </TableCell>
              <TableCell align='center' sx={responsiveStyles}>
                {row.score}
              </TableCell>
              <TableCell align='center' sx={responsiveStyles}>
                {row.duration}
              </TableCell>
              {/* <TableCell align='center' sx={responsiveStyles}>
                {row.finished ? 'v' : ''}
              </TableCell> */}
              <TableCell align='right' sx={responsiveStyles} >
                {row.date}
              </TableCell>
              <TableCell align='center' sx={responsiveStyles}>
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