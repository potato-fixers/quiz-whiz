import '../styles/create-quiz.css';
import { useState, useEffect } from 'react';

const MCQuestions = (props) => {

  return (
    <div className='MCQuestions'>
      <form>
        {props.inputFields.map((input, index) => {
          return (
            <div key={index}>
              <textarea data-type='MC' required name='question' rows={4} cols={40} placeholder='Type Question Here' onChange={(e) => {props.handleFormChange(e, index)}}></textarea>
              <button name='MCRemoveButton' onClick={(e) => {props.removeFields(e, index)}}> X </button>
              <div name='answers'>
                <input data-type='MC' required name='corrAns' placeholder='Correct Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns1' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns2' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns3' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              </div>
            </div>
          )
        })}
        <button name='MCValidation' type='submit' onClick={props.questionValidation}> Validate MC Questions </button>
        <button name='MCButton' onClick={props.addFields}> Add More MC Questions! </button>
      </form>
    </div>
  );
}

export default MCQuestions;