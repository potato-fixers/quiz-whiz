import '../styles/create-quiz.css';

const TFQuestions = (props) => {

  return (
    <div className='TFQuestions'>
      <form>
        {props.inputFields.map((input, index) => {
          return (
            <div key={index}>
              <textarea required name='question' rows={4} cols={40} placeholder='Type Question Here' onChange={(e) => {props.handleFormChange(e, index)}}></textarea>
              <button name='TFRemoveButton' onClick={(e) => {props.removeFields(e, index)}}> X </button>
              <div name='answers'>
                <input required name='corrAns' placeholder='Correct Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input required name='incAns' placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              </div>
            </div>
          )
        })}
        <button name='TFValidation' onClick={props.questionValidation} type='submit'> Validate TF Questions </button>
        <button name='TFButton' onClick={props.addFields}> Add More Questions! </button>
      </form>
    </div>
  );
}

export default TFQuestions;