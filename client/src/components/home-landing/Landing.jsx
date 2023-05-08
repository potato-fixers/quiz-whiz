import './styles/home.css';
import CategoryList from './components/CategoryList.jsx';
import QuizList from './components/QuizList.jsx';
import freeQuiz from './mock_data/freeQuiz.js'

import { useState, useEffect } from 'react';

const Landing = (props) => {

  const [quizzes, setQuizzes] = useState([]);
  const [category, setCategory] = useState("General Knowledge");

  useEffect(() => {
    setQuizzes(freeQuiz);
  }, []);

  return (
    <div className="Landing">
      <h1> Welcome to Quiz-Whiz </h1>
      <CategoryList setCategory={setCategory}/>
      <p> Login to see all Quizzes</p>
      <QuizList category={category} quizzes={quizzes}/>
    </div>
  );
};

export default Landing;