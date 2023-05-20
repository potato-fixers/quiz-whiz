import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Grid } from '@mui/material';
import useQuizzes from '../hooks/useQuizzes';
import { Link } from 'react-router-dom';
import useDeviceDetect from '../hooks/useDeviceDetect';

const Overview = (props) => {

  const { quizzes } = useQuizzes('');
  const { isMobile } = useDeviceDetect();

  const headers = ['Quiz', 'Score (%)', 'Last Play'];

  const responsiveHeaderStyles = isMobile ? {fontSize: '0.8rem'} : {fontSize: '1.5rem'};
  const responsiveStyles = isMobile ? {border:0, fontSize: '0.65rem'} : {border: 0, fontSize: '1.1rem'};
  const inherit = { color: 'inherit', textDecoration: 'inherit', fontWeight: 'bold'};

  return (
    <Grid sx={{width: '100%'}}>
      <Typography variant='h5'>Recent plays</Typography>

      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow hover={true}>
            {headers.map((header, idx) => {
              const alignment = idx < 1 ? 'left' : idx === headers.length - 1 ? 'right' : 'center';
              return <TableCell key={idx} align={alignment}>
                <Typography variant='h6' sx={responsiveHeaderStyles}> {header} </Typography>
              </TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {(quizzes.length &&
            quizzes.map((quiz, idx) => (
            <TableRow
              key={quiz.id}
              hover={true}
              className={ idx % 2 === 0 ? 'stripe': '' }
            >
              <TableCell align='left' sx={responsiveStyles}>
                <Link to={`/quiz/${quiz.quiz_id}/start`} style={inherit}> {quiz.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={responsiveStyles}>
                {quiz.score}
              </TableCell>
              <TableCell align='right' sx={responsiveStyles} >
                {quiz.date}
              </TableCell>
            </TableRow>
          ))) || <TableRow><Typography component='td' align='center'> No quiz found </Typography></TableRow>}
        </TableBody>
      </Table>

    </Grid>
  );
};

export default Overview;