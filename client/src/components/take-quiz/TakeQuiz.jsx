import { useState, useContext } from "react";
import "./styles/take-quiz.css";
import { Route, Routes } from "react-router-dom";

import Begin from "./quiz-components/Begin.jsx";
import Quiz from "./Quiz.jsx";
import Summary from "./quiz-components/Summary.jsx";

// import useFetch from "./hooks/useFetch";
import { QuizContext } from "./context/QuizContext";

function TakeQuiz() {
  const [timer, setTimer] = useState(300000);
  const { id } = useContext(QuizContext);
  // let { id } = useFetch();

  return (
    <div className="container">
      <Routes>
        <Route
          path="/start"
          element={<Begin setTimer={setTimer} quizId={id} />}
        ></Route>
        <Route
          path="/question"
          element={<Quiz time={timer} quizId={id} />}
        ></Route>
        <Route path="/summary" element={<Summary quizId={id} />}></Route>
      </Routes>
    </div>
  );
}

export default TakeQuiz;
