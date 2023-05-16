import { useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material'
import React, { useContext } from 'react';
import { UserContext } from '../../global/UserContext';

const QuizCounts = (props) => {

  const { profile } = useContext(UserContext);

  const [counts, setCounts] = useState({
    quizzes: 0,
    plays: 0,
    favorites: 0
  });

  const getCounts = (userId) => {
    const url = process.env.REACT_APP_API_URI;
    fetch(`${url}/dashboard/counts/?userId=${userId}`)
    .then(async res => {
      setCounts(await res.json());
    })
    .catch(err => {
      console.error(err.stack);
    });
  };

  useEffect(() => {
    getCounts(profile.userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

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