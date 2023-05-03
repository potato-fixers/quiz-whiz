import { Typography, TableBody, TableCell, TableHead, TableRow, Table } from '@mui/material';

const Overview = (props) => {

  const dummyData = [
    {id: 1, quiz: 'quiz 1', score: 1, lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 2, quiz: 'quiz 2', score: 2, lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 3, quiz: 'quiz 3', score: 3, lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 4, quiz: 'quiz 4', score: 4, lastPlayed: 'mm/dd/yyyyThh:mm:ss'},
    {id: 5, quiz: 'quiz 5', score: 5, lastPlayed: 'mm/dd/yyyyThh:mm:ss'}
  ];

  return (
    <>
      <Typography variant='h5'>Recent plays</Typography>

      <Table sx={{ width: '100%' }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align='left'>Quiz</TableCell>
            <TableCell align='center'>Score</TableCell>
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
                {row.score}
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

export default Overview;