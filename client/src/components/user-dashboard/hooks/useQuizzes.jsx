import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuizzes = (tab) => {
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = (userId) => {
    const url = process.env.REACT_APP_API_URI;
    axios.get(`${url}/dashboard/${tab}`)
    .then( async (res) => {
      setQuizzes(res.data);
    })
    .catch(err => {
      console.error(err.stack);
    });
  };

  useEffect(() => {
    getQuizzes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return quizzes;
};

export default useQuizzes;