import '../styles/create-quiz.css';

const TFQuestions = (props) => {

  return (
    <div className='TFQuestions'>
    <h1> Enter TF Questions Here</h1>
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
              <button
                name="TFRemoveButton"
                onClick={(e) => {
                  if (window.confirm('Are you sure?')) {
                  props.removeFields(e, index);
                  }
                }}
              >
                {" "}
                X{" "}
              </button>
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