import './styles/create-quiz.css';
import { useState, useEffect } from 'react';
import Categories from './quiz-components/Categories.jsx';
import MCQuestions from './quiz-components/MC-Questions.jsx';
import TFQuestions from './quiz-components/TF-Questions.jsx';
import APIQuestions from './quiz-components/API-Questions.jsx';


// need useState here for both MC Questions and TF Questions
// state will be passed down to both components along with update functions.

const CreateQuiz = (props) => {

    // useStates here
    const [quizName, setQuizName] = useState('');
    const [TFValidation, setTFValidation] = useState(false);
    const [MCValidation, setMCValidation] = useState(false);
    const [MCInputFields, setMCInputFields] = useState([{question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}, {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}])
    const [TFInputFields, setTFInputFields] = useState([{question: '', corrAns: '', incAns: ''}, {question: '', corrAns: '', incAns: ''}])

    const handleFormChange = (e, index) => {
      e.preventDefault();
      if (e.target.getAttribute('data-type') === 'MC') {
        var data = [...MCInputFields]
        data[index][e.target.name] = e.target.value
        setMCInputFields(data);
      } else {
        var data = [...TFInputFields]
        data[index][e.target.name] = e.target.value
        setTFInputFields(data);
      }
    }

    const nameChange = (e) => {
      e.preventDefault();
      setQuizName(e.target.value);
    }

    // button functionality here

    const addFields = (e) => {
      e.preventDefault();
      var newMCField = {question: '', corrAns: '', incAns1: '', incAns2: '', incAns3: ''}
      var newTField = {question: '', corrAns: '', incAns: ''}
      if (MCInputFields.length + TFInputFields.length < 20 && e.target.name === 'MCButton') {
        setMCInputFields([...MCInputFields, newMCField]);
      } else if (TFInputFields.length + MCInputFields.length < 20 && e.target.name === 'TFButton') {
        setTFInputFields([...TFInputFields, newTField]);
      } else {
        alert('Maximum Questions Reached!')
      }
    }

    const removeFields = (e, index) => {
      e.preventDefault();
      var minQuestions = MCInputFields.length + TFInputFields.length;
      if (e.target.name === 'MCRemoveButton' && minQuestions > 5) {
        var data = [...MCInputFields];
        data.splice(index, 1);
        setMCInputFields(data);
      } else if (e.target.name === 'TFRemoveButton' && minQuestions > 5) {
        var data = [...TFInputFields];
        data.splice(index, 1);
        setTFInputFields(data);
      } else {
        alert('Minimum Questions Reached!')
      }
    }

    const questionValidation = (e) => {
      e.preventDefault();
      if (e.target.name === 'MCValidation') {
        setMCValidation(true)
      } else if (e.target.name === 'TFValidation') {
        setTFValidation(true)
      }
    }

    const sendQuiz = (e) => {
      e.preventDefault();
      var test = JSON.stringify(MCInputFields.concat(TFInputFields));
      if (MCValidation && TFValidation && quizName) {
        console.log('name', quizName, 'quiz info', JSON.parse(test))
      } else if (MCValidation && !TFValidation) {
        alert('Please Validate TF Question Form!')
      } else if (!MCValidation && TFValidation) {
        alert('Please Validate MC Question Form!')
      } else if (!MCValidation && !TFValidation) {
        alert('Please Validate Both Question Forms!')
      } else if (!quizName) {
        alert('Please Enter Quiz Name!')
      }
    }

  return (
    <div className='createQuiz'>
      <div name='quizName'>
        <h1>Name Your Quiz!</h1>
        <input value={quizName} placeholder={'Enter Quiz Name Here'} onChange={nameChange}></input>
      </div>
      <Categories />
      <MCQuestions inputFields={MCInputFields} setInputFields={setMCInputFields} handleFormChange={handleFormChange} addFields={addFields} removeFields={removeFields} questionValidation={questionValidation}/>
      <TFQuestions inputFields={TFInputFields} setInputFields={setTFInputFields} handleFormChange={handleFormChange} addFields={addFields} removeFields={removeFields} questionValidation={questionValidation}/>
      <APIQuestions />
      <button onClick={sendQuiz}> Create Quiz ! </button>
    </div>
  );
}

export default CreateQuiz;