import { useContext } from "react";
import "./styles/take-quiz.css";
import { Route, Routes } from "react-router-dom";

import Begin from "./quiz-components/Begin.jsx";
import QuizQuestion from "./QuizQuestion.jsx";
import Summary from "./quiz-components/Summary.jsx";

import { QuizContext } from "./context/QuizContext";

function TakeQuiz() {
  const { id } = useContext(QuizContext);

  return (
    <div className="quiz-container">
      <Routes>
        <Route path="/start" element={<Begin quizId={id} />}></Route>
        <Route path="/question" element={<QuizQuestion quizId={id} />}></Route>
        <Route path="/summary" element={<Summary quizId={id} />}></Route>
      </Routes>
    </div>
  );
}

export default TakeQuiz;
