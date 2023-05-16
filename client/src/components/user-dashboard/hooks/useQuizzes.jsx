import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../global/UserContext';

const useQuizzes = (tab) => {

  const [quizzes, setQuizzes] = useState([]);
  const { profile } = useContext(UserContext);

  const getQuizzes = (userId) => {
    const url = process.env.REACT_APP_API_URI;

    const query = (tab === '' ? '' : '/') + `?userId=${userId}`;

    fetch(`${url}/dashboard/${tab}${query}`)
    .then( async (res) => {
      setQuizzes(await res.json());
    })
    .catch(err => {
      console.error(err.stack);
    });
  };

  useEffect(() => {
    getQuizzes(profile.userId || 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile]);

  return {
    quizzes,
    getQuizzes
  }
};

export default useQuizzes;
