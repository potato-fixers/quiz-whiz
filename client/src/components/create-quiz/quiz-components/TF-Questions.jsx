import '../styles/create-quiz.css';

const TFQuestions = (props) => {

  return (
    <div className='TFQuestions'>
      <form>
        <button
        name='TFButton' onClick={props.addFields}>
          {" "}
          Add More TF Questions!{" "}
        </button>
        {props.inputFields.map((input, index) => {
          return (
            <div key={index}>
              <textarea
                name='question'
                value={props.inputFields[index]['question']}
                rows={4}
                cols={40}
                placeholder='Type Question Here'
                onChange={(e) => {props.handleFormChange(e, index)}}>
              </textarea>
              <div name='answers'>
                <input
                  name='corrAns'
                  value={props.inputFields[index]['corrAns']}
                  placeholder='Correct Answer'
                  onChange={(e) => {props.handleFormChange(e, index)}}>
                </input>
                <input
                  name='incAns'
                  value={props.inputFields[index]['incAns']}
                  placeholder='Incorrect Answer'
                  onChange={(e) => {props.handleFormChange(e, index)}}>
                </input>
              </div>
            </div>
          )
        })}

      </form>
    </div>
  );
}

export default TFQuestions;