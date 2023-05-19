import QuizListEntry from './QuizListEntry.jsx';

const QuizList = (props) => (
  <div className="landing_quiz_table">
    <table>
      <thead className="landing_quiz_head">
        <tr>
          <th id="landing_table_name_th">Name</th>
          <th className="landing_table_category">Category</th>
          <th className="landing_table_difficulty">Difficulty</th>
          <th className="landing_table_preview"> </th>
        </tr>
      </thead>
      <tbody className="landing_quiz_body">
        {props.quizzes.map((quiz, index) => <QuizListEntry quiz={quiz} key={quiz.id} category={props.category}/>)}
      </tbody>
    </table>
  </div>
);


export default QuizList;