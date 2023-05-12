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
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAs, setCorrectAs] = useState(0);
  const [msg, setMsg] = useState("Default -- You Haven't Take a Test");
  const [score, setScore] = useState(0);

  // Set up the Quiz for User
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

  // Clear Old Answers from Previous Quizzes
  const clearAnswers = () => {
    localStorage.clear();
  };

  // Get User's Answers
  const getUserAnswers = () => {
    if (localStorage.length) {
      const as = [];
      for (var i = 0; i <= localStorage.length; i++) {
        let a = JSON.parse(localStorage.getItem(i));
        a && as.push(a);
        as.length && setUserAnswers(as);
      }
    }
  };

  // Get Total Correctly Answered Quiz Questions
  const getCorrectAnswerCount = () => {
    if (localStorage.length) {
      let count = 0;

      for (var i = 0; i <= localStorage.length; i++) {
        let a = JSON.parse(localStorage.getItem(i));

        if (a && a.key === "corrAns") {
          count++;
        }
      }

      setCorrectAs(count);
    }
  };

  // Update the Quiz Data Based on Current Quiz ID
  useEffect(() => {
    if (id) {
      const data = fetchQuizData(id);
      const questions = fetchQuizQuestions(id);
      setQuizDetails(data);
      setQuestions(questions);
      getUserAnswers();
    }
  }, [id]);

  // Set Summary Message based on User's Quiz Score
  useEffect(() => {
    if (score > 60) {
      setMsg("Congratulations, You Passed! Try out one of our other quizzes?");
    } else if (score <= 60) {
      setMsg("Oh no! You didn't pass, would you like to try again?");
    } else {
      setMsg("Oh no! You ran out of time. Take another stab at it?");
    }
  }, [score, setMsg]);

  // Context to be used in other components
  const ctx = {
    id,
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails,
    clearAnswers,
    userAnswers,
    getUserAnswers,
    getCorrectAnswerCount,
    correctAs,
    msg,
    setMsg,
    score,
    setScore,
  };

  // Return the provider component with the context value
  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
};
