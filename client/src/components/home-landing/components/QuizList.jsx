import QuizListEntry from './QuizListEntry.jsx';

const QuizList = (props) => (
  <div className="landing_quiz_table">
    <table>
      <thead className="landing_quiz_head">
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Difficulty</th>
          <th>Type</th>
          <th> </th>
        </tr>
      </thead>
      <tbody className="landing_quiz_body">
        {props.quizzes.map((quiz, index) => <QuizListEntry page={props.page} quiz={quiz} key={quiz.id} category={props.category}/>)}
      </tbody>
    </table>
  </div>
);


export default QuizList;