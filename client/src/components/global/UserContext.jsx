import React, { createContext, useState } from 'react';

// Create the context object
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  // Set up state variables here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('guest');
  // Define any functions or methods that update the state here
  const updateIsLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const updateUsername = (user) => {
    setUser(user);
  }

  // Create the context value object with the state and functions
  const contextValue = {
    isLoggedIn,
    updateIsLoggedIn,
    user,
    updateUsername
  };

  // Return the provider component with the context value
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};