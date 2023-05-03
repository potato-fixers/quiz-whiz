import './styles/home.css';
import LoginSignin from './components/LoginSignin.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import QuizList from './components/QuizList.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useState, useEffect } from 'react';

const Home = (props) => {

  return (
    <>
      <NavigationBar />
      <LoginSignin />
      <SearchBar />
      <QuizList />
    </>
  );
};

export default Home;