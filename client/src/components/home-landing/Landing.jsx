import './styles/home.css';
import CategoryList from './components/CategoryList.jsx';
import QuizList from './components/QuizList.jsx';
import Pagination from './components/Pagination.jsx';
import SearchBar from './components/SearchBar.jsx';
// import freeQuiz from './mock_data/freeQuiz.js';
import { useContext } from 'react'
import { UserContext } from '../global/UserContext.jsx'
import axios from 'axios';

import { useState, useEffect } from 'react';


const Landing = (props) => {

  const [quizzes, setQuizzes] = useState([]);
  const [category, setCategory] = useState("General Knowledge");
  const [currentQuizzes, setCurrent] = useState([]);
  const [page, setPage] = useState(0);
  const { profile } = useContext(UserContext);
  const [difficulty, setDifficulty] = useState('All');
  const [categoryList, setCategoryList] = useState(['All']);
  const [userCategory, setUserCategory] = useState('All');

  useEffect(() => {
    let user_id;
    if (profile.userId === undefined) {
      user_id = 1;
    } else {
      user_id = profile.userId ;
    }
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
          arr.push(response.data.rows[j])
        }
      }
      setCurrent(arr);

      if (user_id !== 1) {
        let list = ['All'];
        response.data.rows.forEach((row) => {
          var cate = row.category;
          if (list.indexOf(cate) === -1) {
            list.push(cate);
          }
        });
        setCategoryList(list);
      }
    });

  }, [profile.userId]);

  if (profile.userId === undefined) {
    return (
      <div className="Landing">
        <div className="landing_title">
          <h1> Welcome to Quiz Whiz </h1>
        </div>
        <CategoryList setCategory={setCategory}/>
        <p id="landing_subtitle"> Login to see all Quizzes</p>
        <QuizList category={category} quizzes={quizzes}/>
      </div>
    );
  } else {
    return (
      <div className="Home">
        <div className="landing_title">
          <h1>  Hi, <em>{profile.username}</em></h1>
        </div>
        <SearchBar setQuizzes={setQuizzes} setUserCategory={setUserCategory} setDifficulty={setDifficulty}
          difficulty={difficulty} categoryList={categoryList} userCategory={userCategory} setCurrent={setCurrent} id={profile.userId}/>
        <p id="landing_subtitle"></p>
        <QuizList category={'all'} quizzes={currentQuizzes} />
        <Pagination page={page} setPage={setPage} quizzes={quizzes} setCurrent={setCurrent} />
      </div>
    );
  }
};

export default Landing;
