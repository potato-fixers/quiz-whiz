import './styles/create-quiz.css';
import { useState, useEffect } from 'react';
import Categories from './quiz-components/Categories.jsx';
import MCQuestions from './quiz-components/MC-Questions.jsx';
import TFQuestions from './quiz-components/TF-Questions.jsx';
import APIQuestions from './quiz-components/API-Questions.jsx';


// need useState here for both MC Questions and TF Questions
// state will be passed down to both components along with update functions.

const CreateQuiz = (props) => {
  return (
    <div className='createQuiz'>
      <Categories />
      <MCQuestions />
      <TFQuestions />
      <APIQuestions />
      <button> Create Quiz ! </button>
    </div>
  );
}

export default CreateQuiz;