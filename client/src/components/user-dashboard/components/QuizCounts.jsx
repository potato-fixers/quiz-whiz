import { useContext } from 'react';
import { Stack, Typography, Box, Grid } from '@mui/material';
import { CountsContext } from '../context/CountsContext';

const QuizCounts = (props) => {

  const { counts } = useContext(CountsContext);

  const Counts = ({name, count}) => <Grid item >
    <Typography variant='h4'>{count}</Typography>
    <Typography variant='subtile2'> {name} </Typography>
  </Grid>

  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-start'
      columnSpacing={12}
      sx={{ mt: 2, mb: 2}}
    >
        {(props.activeTab === 0 || props.activeTab === 1) && <Counts name={'Quizzes'} count={counts.quizzes} />}
        {(props.activeTab === 0 || props.activeTab === 2) && <Counts name={'Plays'} count={counts.plays} />}
        {(props.activeTab === 0 || props.activeTab === 3) && <Counts name={'Favorites'} count={counts.favorites} />}
    </Grid>
  )

};

export default QuizCounts;