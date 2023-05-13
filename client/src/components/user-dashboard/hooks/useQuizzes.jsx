import { useState, useEffect } from 'react';

const useQuizzes = (tab) => {
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = (userId) => {
    const url = process.env.REACT_APP_API_URI;
    fetch(`${url}/dashboard/${tab}`)
    .then( async (res) => {
      setQuizzes(await res.json());
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