import '../styles/create-quiz.css';

const MCQuestions = (props) => {

  return (
    <div className='MCQuestions'>
      <form>
        {props.inputFields.map((input, index) => {
          return (
            <div key={index}>
              <textarea data-type='MC' required name='question' value={props.inputFields[index]['question']} rows={4} cols={40} placeholder='Type Question Here' onChange={(e) => {props.handleFormChange(e, index)}}></textarea>
              <button name='MCRemoveButton' onClick={(e) => {props.removeFields(e, index)}}> X </button>
              <div name='answers'>
                <input data-type='MC' required name='corrAns' value={props.inputFields[index]['corrAns']} placeholder='Correct Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns1' value={props.inputFields[index]['incAns1']} placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns2' value={props.inputFields[index]['incAns2']}placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
                <input data-type='MC' required name='incAns3' value={props.inputFields[index]['incAns3']}placeholder='Incorrect Answer' onChange={(e) => {props.handleFormChange(e, index)}}></input>
              </div>
            </div>
          )
        })}
        <button name='MCButton' onClick={props.addFields}> Add More MC Questions! </button>
      </form>
    </div>
  );
}

export default MCQuestions;