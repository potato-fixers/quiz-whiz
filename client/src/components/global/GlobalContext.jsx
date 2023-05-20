import React, { useMemo, useState, useEffect, createContext } from 'react';

// Create the context object
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {

  // Set up state variables here
  const [path, setPath] = useState(window.location.href);
  const URLREGEX = useMemo(() => /.*\/quiz\/\d+\/(start|question|summary)$/i, []);

  useEffect(() => {
    path && setPath(window.location.href);

    if (path && !path.match(URLREGEX)) {
      localStorage.clear();
    }
  }, [path, URLREGEX]);

  // Define any functions or methods that update the state here
  const contextValue = {
    path,
    setPath,
    URLREGEX
  };

  // Return the provider component with the context value
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};