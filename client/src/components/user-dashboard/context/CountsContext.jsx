import { createContext, useState } from 'react';

export const CountsContext = createContext();

export const CountsProvider = ({ children }) => {

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

  const value = {
    counts,
    getCounts
  };

  return (
    <CountsContext.Provider value={value}>
      {children}
    </CountsContext.Provider>
  );
};
