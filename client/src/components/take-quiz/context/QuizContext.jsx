import { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Create the context object
export const QuizContext = createContext();

// Create the provider component
export const QuizProvider = ({ children }) => {
  // Set up state variables here
  let { id } = useParams();
  const [quizDetails, setQuizDetails] = useState([{}]);
  const [questions, setQuestions] = useState([{}]);

  const fetchQuizData = async (id) => {
    try {
      const payload = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URI}/quiz/${id}/start`,
      });
      payload && setQuizDetails(payload.data);
      // console.log("Got PAYLOAD", payload.data);
    } catch (err) {
      console.log("There was an error getting your quiz", err);
    }
  };

  const fetchQuizQuestions = async (id) => {
    try {
      const payload = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URI}/quiz/${id}/question`,
      });

      let quizQs = payload && JSON.parse(payload.data);
      // console.log("Got PAYLOAD", quizQs);
      quizQs && setQuestions(quizQs);
    } catch (err) {
      console.log("There was an error getting your questions", err);
    }
  };

  useEffect(() => {
    if (id) {
      const data = fetchQuizData(id);
      const questions = fetchQuizQuestions(id);
      setQuizDetails(data);
      setQuestions(questions);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const data = fetchQuizData(id);
      const questions = fetchQuizQuestions(id);
      setQuizDetails(data);
      setQuestions(questions);
    }
  }, [id]);

  // Create the context value object with the state and functions
  const ctx = {
    id,
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails,
  };

  // Return the provider component with the context value
  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
};
