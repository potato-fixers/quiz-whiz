import axios from 'axios';
import { useState, useCallback } from 'react';
const SearchBar = (props) => {

  const [query, setQuery] = useState('');

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) { clearTimeout(timer); }
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handlingCategorySelect = (event) => {
    props.setUserCategory(event.target.value);
    axios.get(`${process.env.REACT_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: props.difficulty, category: event.target.value, query: query}})
    .then((response) => {
      props.setQuizzes(response.data.rows);
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
      props.setCurrent(arr);
    });
  }
  const handlingDifficultySelect = (event) => {
    props.setDifficulty(event.target.value);
    axios.get(`${process.env.REACT_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: event.target.value, category: props.userCategory, query: query}})
    .then((response) => {
      props.setQuizzes(response.data.rows);
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
      props.setCurrent(arr);
    });
  }
  const handlingQuery = (event) => {
    setQuery(event.target.value);
    axios.get(`${process.env.REACT_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: props.difficulty, category:props.userCategory, query: event.target.value}})
    .then((response) => {
      props.setQuizzes(response.data.rows);
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
      props.setCurrent(arr);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSetQuery = useCallback(debounce(handlingQuery), []);

  return (
    <div className="landing_searchbar">
      <input className="search-bar" type="text" size="50" onChange={debounceSetQuery}/>
      <select className="landing_category_select" onChange={handlingCategorySelect}>
        {props.categoryList.map((category) => <option value={category} key={category}>{category}</option>)}
      </select>
      <select className="landing_difficulty_select" onChange={handlingDifficultySelect}>
         <option value={'All'} >All</option>
         <option value={'easy'} >Easy</option>
         <option value={'medium'} >Medium</option>
         <option value={'hard'} >Hard</option>
      </select>
    </div>
  );
};

export default SearchBar;