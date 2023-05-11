import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

// Create the context object
export const QuizContext = createContext();

// Create the provider component
export const QuizProvider = ({ children }) => {
  // Set up state variables here
  let {
    id,
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails,
    questionAnswers,
    setQuestionAnswers,
  } = useFetch();
  // const [questions, setQuestions] = useState([]);
  // const [questionAnswers, setQuestionAnswers] = useState([]);

  // Define any functions or methods that update the state here

  // Create the context value object with the state and functions
  const ctx = {
    id,
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails,
    questionAnswers,
    setQuestionAnswers,
  };

  // Return the provider component with the context value
  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
};
