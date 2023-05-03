import './styles/landing.css';
import LoginSignin from './components/LoginSignin.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import QuizList from './components/QuizList.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useState, useEffect } from 'react';

const Landing = (props) => {

  return (
    <>
      <NavigationBar />
      <LoginSignin />
      <SearchBar />
      <QuizList />
    </>
  );
};

export default Landing;