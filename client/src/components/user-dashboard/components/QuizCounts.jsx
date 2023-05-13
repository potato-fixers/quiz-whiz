import { useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material'

const QuizCounts = (props) => {

  const [counts, setCounts] = useState({
    quizzes: 0,
    plays: 0,
    favorites: 0
  });

  const getCounts = async (userId) => {
    const url = process.env.REACT_APP_API_URI;
    const response = await fetch(`${url}/dashboard/counts`)
    if (response.ok) {
      const data = await response.json();
      setCounts(data);
    }
  };

  useEffect(() => {
    getCounts();
  }, []);

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