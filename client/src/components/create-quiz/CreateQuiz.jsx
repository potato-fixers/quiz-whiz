import './styles/create-quiz.css';
import { useState } from 'react';
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
    // create state here to update which category is the selected
    const [category1, setState1] = useState(false);
    const [category2, setState2] = useState(false);
    const [category3, setState3] = useState(false);
    const [category4, setState4] = useState(false);
    const [category5, setState5] = useState(false);
    const [categoryVal, setCategoryVal] = useState(null);

  // useState function
  const onSelect = (e) => {
    e.preventDefault();

    if (e.target.name === 'category1') {

      setState1(true);
      setState2(false);
      setState3(false);
      setState4(false);
      setState5(false);
      setCategoryVal(e.target.name)
    } else if (e.target.name === 'category2') {
      setState1(false);
      setState2(true);
      setState3(false);
      setState4(false);
      setState5(false);
      setCategoryVal(e.target.name)
    } else if (e.target.name === 'category3') {
      setState1(false);
      setState2(false);
      setState3(true);
      setState4(false);
      setState5(false);
      setCategoryVal(e.target.name)
    } else if (e.target.name === 'category4') {
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(true);
      setState5(false);
      setCategoryVal(e.target.name)
    } else {
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(false);
      setState5(true);
      setCategoryVal(e.target.name)
    }
  }

    const handleFormChange = (e, index) => {
      e.preventDefault();
      if (e.target.getAttribute('data-type') === 'MC') {
        var MCdata = [...MCInputFields]
        MCdata[index][e.target.name] = e.target.value
        setMCInputFields(MCdata);
        if (e.target.value === '') {
          console.log('test1')
          setMCValidation(false);
        } else {
          setMCValidation(true)
        }
      } else {
        var TFdata = [...TFInputFields]
        TFdata[index][e.target.name] = e.target.value
        setTFInputFields(TFdata);
        if (e.target.value === '') {
          setTFValidation(false);
        } else {
          console.log('test')
          setTFValidation(true)
        }

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
        setMCValidation(false);
      } else if (TFInputFields.length + MCInputFields.length < 20 && e.target.name === 'TFButton') {
        setTFInputFields([...TFInputFields, newTField]);
        setTFValidation(false);
      } else {
        alert('Maximum Questions Reached!')
      }
    }

    const removeFields = (e, index) => {
      e.preventDefault();
      var minQuestions = MCInputFields.length + TFInputFields.length;
      if (e.target.name === 'MCRemoveButton' && minQuestions > 5) {
        var MCdata = [...MCInputFields];
        MCdata.splice(index, 1);
        setMCInputFields(MCdata);
      } else if (e.target.name === 'TFRemoveButton' && minQuestions > 5) {
        var TFdata = [...TFInputFields];
        TFdata.splice(index, 1);
        setTFInputFields(TFdata);
        console.log(TFInputFields.length)
      } else {
        alert('Minimum Questions Reached!')
      }
    }

    const questionValidation = (callback) => {
      console.log(MCValidation)
      if (TFInputFields.length === 0) {
        for (var i = 0; i < MCInputFields.length; i++) {
          if (MCInputFields[i].question.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[i].corrAns.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[i].incAns1.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[i].incAns2.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[i].incAns3.length < 1) {
            setMCValidation(false);
          }
          callback(true, null)
        }
      } else if (MCInputFields.length === 0) {
        console.log(TFValidation)
        for (var j = 0; j < TFInputFields.length; j++) {
          if (TFInputFields[j].question.length < 1) {
            setTFValidation(false);
          }
          if (TFInputFields[j].corrAns.length < 1) {
            setTFValidation(false);
          }
          if (TFInputFields[j].incAns.length < 1) {
            setTFValidation(false);
          }
        }
        callback(null, true)

      } else {
        for (var k = 0; k < MCInputFields.length; k++) {
          if (MCInputFields[k].question.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[k].corrAns.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[k].incAns1.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[k].incAns2.length < 1) {
            setMCValidation(false);
          }
          if (MCInputFields[k].incAns3.length < 1) {
            setMCValidation(false);
          }
        }

        for (var l = 0; l < TFInputFields.length; l++) {
          if (TFInputFields[l].question.length < 1) {
            setTFValidation(false);
          }
          if (TFInputFields[l].corrAns.length < 1) {
            setTFValidation(false);
          }
          if (TFInputFields[l].incAns.length < 1) {
            setTFValidation(false);
          }
        }
        callback(null, null)
      }
    }


    const sendQuiz = (e) => {

      e.preventDefault();

      questionValidation( (MC, TF) => {
        console.log('should be false, true, true', TF, MCValidation, TFValidation)
        if (!TFValidation && TF === true) {
          alert('Please Fill Out All TF Question Fields!');
        } else if (!MCValidation && MC === true) {
          alert('Please Fill Out All MC Question Fields!');
        } else if (!MCValidation && TFValidation && !MC && !TF) {
          alert('Please Fill Out All MC / TF Question Fields or Remove Unused Questions')
        } else if (MCValidation && !TFValidation && !MC && !TF) {
          alert('Please Fill Out All MC / TF Question Fields or Remove Unused Questions')
        } else if (!MCValidation && !TFValidation && !MC && !TF) {
          alert('Please Fill Out All MC / TF Question Fields or Remove Unused Questions')
        } else if (!quizName) {
          alert('Please Enter Quiz Name!')
        } else if (!categoryVal) {
          alert('Please Choose Category!')
        } else {
          console.log('test')
          if (TF) {

            var quizDataTF = {
              quizzes: {
              user_id: 'admin',
              name: quizName,
              category: categoryVal
              },
              questions: JSON.stringify(TFInputFields),
            }

            var optionsTF = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: quizDataTF,
            }

            fetch('http://localhost:3000/create', optionsTF)
            .then( (data) => {
              console.log('response', data)
            })

          } else if (MC) {
            var quizDataMC = {
              quizzes: {
              user_id: 'admin',
              name: quizName,
              category: categoryVal
              },
              questions: JSON.stringify(MCInputFields),
            }

            var optionsMC = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: quizDataMC,
            }

            fetch('http://localhost:3000/create', optionsMC)
            .then( (data) => {
              console.log('response', data)
            })
          } else {
            var quizDataMCTF = {
              quizzes: {
              user_id: 'admin',
              name: quizName,
              category: categoryVal
              },
              questions: JSON.stringify(MCInputFields.concat(TFInputFields)),
            }

            var optionsMCTF = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: quizDataMCTF,
            }

            fetch('http://localhost:3000/create', optionsMCTF)
            .then( (data) => {
              console.log('response', data)
            })
          }
        }

      })
    }

  return (
    <div className='createQuiz'>
      <div name='quizName'>
        <h1>Name Your Quiz!</h1>
        <input value={quizName} placeholder={'Enter Quiz Name Here'} onChange={nameChange}></input>
      </div>
      <Categories category1={category1} category2={category2} category3={category3} category4={category4} category5={category5} select={onSelect} />
      <MCQuestions inputFields={MCInputFields} setInputFields={setMCInputFields} handleFormChange={handleFormChange} addFields={addFields} removeFields={removeFields} />
      <TFQuestions inputFields={TFInputFields} setInputFields={setTFInputFields} handleFormChange={handleFormChange} addFields={addFields} removeFields={removeFields} />
      <APIQuestions />
      <div>
        <button onClick={ (e) => {setTimeout(sendQuiz(e), 5000)}}> Create Quiz! </button>
      </div>
    </div>
  );
}

export default CreateQuiz;