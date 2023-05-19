import { useContext } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { CountsContext } from '../context/CountsContext';

const QuizCounts = (props) => {

  const { counts } = useContext(CountsContext);

  const Counts = ({name, count}) => <Box>
    <Typography variant='h5'>{count}</Typography>
    <Typography >{name}</Typography>
  </Box>

  return (
    <Stack direction='row' spacing={20} sx={{margin: 3}}>
      {(props.activeTab === 0 || props.activeTab === 1) && <Counts name={'Quizzes'} count={counts.quizzes} />}
      {(props.activeTab === 0 || props.activeTab === 2) && <Counts name={'Plays'} count={counts.plays} />}
      {(props.activeTab === 0 || props.activeTab === 3) && <Counts name={'Favorites'} count={counts.favorites} />}
    </Stack>
  )

};

export default QuizCounts;