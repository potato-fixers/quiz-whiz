import axios from 'axios';
import { useState, useCallback } from 'react';
import { Stack, OutlinedInput, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

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
    axios.get(`${import.meta.env.VITE_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: props.difficulty, category: event.target.value, query: query}})
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
    axios.get(`${import.meta.env.VITE_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: event.target.value, category: props.userCategory, query: query}})
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
    axios.get(`${import.meta.env.VITE_APP_API_URI}/get/getQuizzes`, { params: { id : props.id, difficulty: props.difficulty, category:props.userCategory, query: event.target.value}})
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
    <Stack direction='row' spacing={1} justifyContent='center'>
    <OutlinedInput fullWidth size='large' placeholder='Search quizzes' data-testid="search-input" onChange={debounceSetQuery}/>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
      <InputLabel id="select-label-category">Categories</InputLabel>
      <Select
        labelId='select-label-category'
        label='Categories'
        name='category'
        value={props.userCategory}
        onChange={handlingCategorySelect}
        size='large'
        data-testid="category-select"
      >
        {props.categoryList.map((category) => <MenuItem value={category} key={category}>{category}</MenuItem>)}
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
    <InputLabel id="select-label-difficulty">Difficulty</InputLabel>
      <Select
        labelId='select-label-difficulty'
        label='Difficulty'
        name='difficulty'
        value={props.difficulty}
        onChange={handlingDifficultySelect}
        size='large'
      >
          <MenuItem value='All'>All</MenuItem>
          <MenuItem value='easy'>Easy</MenuItem>
          <MenuItem value='medium'>Medium</MenuItem>
          <MenuItem value='hard'>Hard</MenuItem>
      </Select>
    </FormControl>
  </Stack>
  );
};

export default SearchBar;