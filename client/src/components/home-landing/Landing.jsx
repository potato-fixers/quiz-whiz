import './styles/home.css';
import CategoryList from './components/CategoryList.jsx';
import QuizList from './components/QuizList.jsx';
import Pages from './components/Pages.jsx';
import SearchBar from './components/SearchBar.jsx';
// import freeQuiz from './mock_data/freeQuiz.js';
import axios from 'axios';

import { useState, useEffect } from 'react';


const Landing = (props) => {

  const [quizzes, setQuizzes] = useState([]);
  const [category, setCategory] = useState("General Knowledge");
  const [currentQuizzes, setCurrent] = useState([]);
  const [page, setPage] = useState(0);
  const user_id = 1;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URI}/get/getQuizzes`, { params: { id : user_id}})
    .then((response) => {
      setQuizzes(response.data.rows);
      var arr = [];
      if (response.data.rows.length >= 5) {
        for (var i = 0; i < 5; i ++) {
          arr.push(response.data.rows[i])
        }
      } else {
        for (var j = 0; j < response.data.rows.length; j ++) {
          arr.push(response.data.rows[i])
        }
      }
      setCurrent(arr);
    });
  }, [user_id]);

  // const current = (newpage) => {
  //   let arr = [];
  //   for (var i = newpage * 5; i < newpage * 5 + 5; i ++) {
  //     arr.push(quizzes[i]);
  //   }
  //   setCurrent(arr);
  // }

  if (user_id === 'undefined') {
    return (
      <div className="Landing">
        <h1> Welcome to Quiz Whiz </h1>
        <CategoryList setCategory={setCategory}/>
        <p> Login to see all Quizzes</p>
        <QuizList category={category} quizzes={quizzes}/>
      </div>
    );
  } else {
    console.log(currentQuizzes)
    return (
      <div className="Home">
        <h1> Hi, username</h1>
        <SearchBar />
        <QuizList category={'all'} quizzes={currentQuizzes} />
        <Pages page={page} setPage={setPage} quizzes={quizzes} setCurrent={setCurrent} />
      </div>
    );
  }
};

export default Landing;
