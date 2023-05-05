import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';
import FilterBar from './subComponents/FilterBar.jsx';

const Plays = (props) => {

  const dummyData = [
    {id: 1, quiz: 'quiz 1', plays: 1, bestScore: '23%', bestTime: '5 m', finished: true, lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 2, quiz: 'quiz 2', plays: 2, bestScore: '80%', bestTime: '1 m', finished: true,  lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 3, quiz: 'quiz 3', plays: 3, bestScore: '10%', bestTime: '', finished: false,  lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 4, quiz: 'quiz 4', plays: 4, bestScore: '75%', bestTime: '3m', finished: true,  lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 5, quiz: 'quiz 5', plays: 5, bestScore: '36%', bestTime: '', finished: false,  lastPlayed: 'mm/dd/yyyyThh:mm:ss'}
  ];

  return (
    <>
      <Typography variant='h5'>Plays</Typography>

      <FilterBar />

      <Table sx={{ width: '100%' }} aria-label='simple table'>
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Plays</TableCell>
            <TableCell align='center'>Best Score</TableCell>
            <TableCell align='center'>Best Time</TableCell>
            <TableCell align='center'>Finished?</TableCell>
            <TableCell align='right'>Last Played</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell align='left' sx={{ border: 0 }}>
                {row.quiz}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.plays}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.bestScore}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.bestTime}
              </TableCell>
              <TableCell align='center' sx={{ border: 0 }}>
                {row.finished ? 'v' : ''}
              </TableCell>
              <TableCell align='right' sx={{ border: 0 }} >
                {row.lastPlayed}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  );
};

export default Plays;