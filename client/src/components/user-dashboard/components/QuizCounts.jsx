import { useContext } from 'react';
import { Stack, Typography, Box, Grid } from '@mui/material';
import { CountsContext } from '../context/CountsContext';
import useDeviceDetect from '../hooks/useDeviceDetect';

const QuizCounts = (props) => {

  const { counts } = useContext(CountsContext);
  const { isMobile } = useDeviceDetect();

  const Counts = ({name, count}) => <Grid item >
    <Typography variant='h5'>{count}</Typography>
    <Typography variant='subtile2'> {name} </Typography>
  </Grid>

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-evenly'
      columnSpacing={isMobile ? 5 : 20}
      sx={{ mt: 5, mb: 5}}
    >
        {(props.activeTab === 0 || props.activeTab === 1) && <Counts name={'Quizzes'} count={counts.quizzes} />}
        {(props.activeTab === 0 || props.activeTab === 2) && <Counts name={'Plays'} count={counts.plays} />}
        {(props.activeTab === 0 || props.activeTab === 3) && <Counts name={'Favorites'} count={counts.favorites} />}
    </Grid>
  )

};

export default QuizCounts;