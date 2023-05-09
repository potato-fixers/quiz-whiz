import "./styles/take-quiz.css";
import { Route, Routes } from "react-router-dom";

import Begin from "./quiz-components/Begin.jsx";
import Quiz from "./Quiz.jsx";
import Summary from "./quiz-components/Summary.jsx";

import useFetch from "./hooks/useFetch";

function TakeQuiz() {
  let { id } = useFetch();

  return (
    <div className="container">
      <Routes>
        <Route path="/start" element={<Begin quizId={id} />}></Route>
        <Route path="/question" element={<Quiz quizId={id} />}></Route>
        <Route path="/summary" element={<Summary quizId={id} />}></Route>
      </Routes>
    </div>
  );
}

export default TakeQuiz;
