import { Typography, TableBody, TableCell, TableHead, TableRow, Table, Grid } from '@mui/material';
import useQuizzes from '../hooks/useQuizzes';
import { Link } from 'react-router-dom';

const Overview = (props) => {

  const { quizzes } = useQuizzes('');

  const headers = ['Quiz', 'Score (%)', 'Last Play'];

  const noBorder = { border: 0 };
  const inherit = { color: 'inherit', textDecoration: 'inherit', fontWeight: 'bold'};

  return (
    <Grid>
      <Typography variant='h5'>Recent plays</Typography>

      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow hover={true}>
            {headers.map((header, idx) => {
              const alignment = idx < 1 ? 'left' : idx === headers.length - 1 ? 'right' : 'center';
              return <TableCell key={idx} align={alignment}>
                <Typography variant='h6' > {header} </Typography>
              </TableCell>
            })}
            <TableCell>{/* Placeholder */}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(quizzes.length &&
            quizzes.map((quiz) => (
            <TableRow
              key={quiz.id}
              hover={true}
            >
              <TableCell align='left' sx={noBorder}>
                <Link to={`/quiz/${quiz.quiz_id}/start`} style={inherit}> {quiz.quiz_name} </Link>
              </TableCell>
              <TableCell align='center' sx={noBorder}>
                {quiz.score}
              </TableCell>
              <TableCell align='right' sx={noBorder} >
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