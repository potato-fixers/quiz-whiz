import { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

const LandingPagination = (props) => {
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    let newLimit = Math.floor(props.quizzes.length / 5);
    if (props.quizzes.length / 5 === newLimit) {
      setLimit(newLimit);
    } else {
      setLimit(newLimit + 1);
    }
  }, [props.quizzes]);

  const handleClick = (event) => {
    if (event.target.innerText !== '…') {
      let newpage = parseInt(event.target.innerText) - 1;


      let arr = [];
      if (props.quizzes.length >= newpage * 5 + 5) {
        for (var i = newpage * 5; i < newpage * 5 + 5; i ++) {
          arr.push(props.quizzes[i]);
        }
      } else {
        for (var j = newpage * 5; j < props.quizzes.length; j ++) {
          arr.push(props.quizzes[j]);
        }
      }
      props.setCurrent(arr);
      props.setPage(newpage);
    }
  }


  return (
    <Stack alignItems="center">
      <Pagination count={limit} onClick={handleClick} size="large" hidePrevButton hideNextButton />
    </Stack>
  );
};

export default LandingPagination;