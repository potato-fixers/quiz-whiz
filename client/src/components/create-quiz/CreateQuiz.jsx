import './styles/create-quiz.css';
import { useState, useEffect } from 'react';
import Categories from './quiz-components/Categories.jsx';
import MCQuestions from './quiz-components/MC-Questions.jsx';
import TFQuestions from './quiz-components/TF-Questions.jsx';
import APIQuestions from './quiz-components/API-Questions.jsx';


// need useState here for both MC Questions and TF Questions
// state will be passed down to both components along with update functions.

const CreateQuiz = (props) => {

    // create useState form fields here
    const [MCInputFields, setMCInputFields] = useState([{question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}])

    const handleFormChange = (e, index) => {
      var data = [...MCInputFields]
      data[index][e.target.name] = e.target.value
      console.log(MCInputFields);
    }

    const addMCFields = () => {
      var newField = {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}
      if (MCInputFields.length < 20) {
        setMCInputFields([...MCInputFields, newField]);
      } else {
        alert('Maximum Questions Reached!')
      }
    }

  return (
    <div className='createQuiz'>
      <Categories />
      <MCQuestions inputFields={MCInputFields} setInputFields={setMCInputFields} handleFormChange={handleFormChange} addFields={addMCFields}/>
      <TFQuestions />
      <APIQuestions />
      <button> Create Quiz ! </button>
    </div>
  );
}

export default CreateQuiz;