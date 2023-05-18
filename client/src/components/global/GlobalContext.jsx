import React, { useMemo, useState, useEffect, createContext } from 'react';
import { useLocation } from "react-router-dom";

// Create the context object
export const GlobalContext = createContext();

// Create the provider component
export const GlobalProvider = ({ children }) => {
  
  // Set up state variables here
  const location = useLocation();
  const [path, setPath] = useState(window.location.href);
  const URLREGEX = useMemo(() => /^.*\/quiz\/\d+\/(start|question|summary)/i, []);
  
  useEffect(() => {
    location && setPath(location.pathname);
    if (path) {

        if (!path.match(URLREGEX)) {
          localStorage.clear();
        } 
    }
  }, [location, path, URLREGEX]);

  // Define any functions or methods that update the state here
  const contextValue = {
    location,
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