import { useState, useEffect } from 'react';

const useQuizzes = (tab) => {
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async (userId) => {
    const url = process.env.REACT_APP_API_URI;
    const response = await fetch(`${url}/dashboard/${tab}`);
    if (response.ok) {
      setQuizzes(await response.json());
    }
  };

  useEffect(() => {
    getQuizzes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return quizzes;
};

export default useQuizzes;