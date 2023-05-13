import React, { createContext, useState } from 'react';
// Create the context object
export const UserContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  // Set up state variables here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('guest');
  const [profile, setProfile] = useState({});
  // Define any functions or methods that update the state here

  const updateUsername = (user) => {
    setUser(user);
  }


  const login = (user) => {
    setProfile(user);
    setUser(user.username);
    setIsLoggedIn(true);
  }

  const contextValue = {
    isLoggedIn,
    user,
    updateUsername,
    profile,
    setProfile,
    setIsLoggedIn,
    setUser,
    login
  };

  // Return the provider component with the context value
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};