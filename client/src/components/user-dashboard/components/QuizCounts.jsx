import { useState, useEffect } from 'react';
import { Stack } from '@mui/material'

const QuizCounts = (props) => {

  const [counts, setCounts] = useState({
    quizzes: 0,
    plays: 0,
    favorites: 0
  });

  const getCounts = () => {
    // API call here
    setCounts({
      quizzes: 0,
      plays: 0,
      favorites: 0
    });
  };

  useEffect(() => {
    getCounts();
  }, []);

  const Counts = () => {
    switch (props.activeTab) {
      case 1:
        return <div>{counts.quizzes} Quizzes</div>;
      case 2:
        return <div>{counts.plays} Plays</div>;
      case 3:
        return <div>{counts.favorites} Favorites</div>;
      default:
        return (
          <>
            <div>{counts.quizzes} Quizzes</div>
            <div>{counts.plays} Plays</div>
            <div>{counts.favorites} Favorites</div>
          </>
        );
    }
  };


  return (
    <Stack direction='row'>
      <Counts />
    </Stack>
  )

};

export default QuizCounts;