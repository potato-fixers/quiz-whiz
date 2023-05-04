import '../styles/create-quiz.css';
import { useState, useEffect } from 'react';

const MCQuestions = (props) => {

  return (
    <div className='MCQuestions'>
      <form>
        {props.inputFields.map((input, index) => {
          return (
            <div key={index}>
              <textarea name='question' rows={4} cols={40} placeholder='Type Question Here' onChange={(e) => {props.handleFormChange(e, index)}}></textarea>
              <input name='corrAns' placeholder='Correct Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              <input name='incAns1' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              <input name='incAns2' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              <input name='incAns3' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
            </div>
          )
        })}
      </form>
      <button onClick={props.addFields}> Add More Questions! </button>
    </div>
  );
}

export default MCQuestions;