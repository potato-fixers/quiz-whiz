import { useState, useEffect, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
// import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../../global/UserContext";

// Create the context object
export const QuizContext = createContext();

// Create the provider component
export const QuizProvider = ({ children }) => {
  // Set up state variables here
  let { id } = useParams();
  const { isLoggedIn } = useContext(UserContext);

  // const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [quizActive, setQuizActive] = useState(null)
 
  const [quizDetails, setQuizDetails] = useState([{}]);
  const [quizStart, setQuizStart] = useState(null);
  const [quizEnd, setQuizEnd] = useState(null);
  
  const [time, setTime] = useState(300000);

  const [questions, setQuestions] = useState([{}]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAs, setCorrectAs] = useState(0);

  const [finished, setFinished] = useState(false);
  const [duration, setDuration] = useState(0);

  const [score, setScore] = useState(0);
  const [saved, setSaved] = useState(false);
  const [msg, setMsg] = useState("Whoops, You Haven't Take Any Tests Yet!");

  // Set up the Quiz for User
  const fetchQuizData = async (id) => {
    try {
      const payload = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URI}/quiz/${id}/start`,
      });
      payload && setQuizDetails(payload.data);
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

  // Clear Old Answers, Duration, Status, and Score from Previous Quizzes
  const resetQuiz = () => {
    localStorage.clear();
    setScore(0);
    setDuration(0);
    // setSaveStatus(null);
    setFinished(false);
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

        if (a && a.key === "corrAns" && a.key !== "start") {
          count++;
        }
      }

      setCorrectAs(count);
    }
  };

  const calculateDuration = () => {
      setQuizEnd(Date.now());
      setQuizStart(JSON.parse(localStorage.getItem('start')));
  };

  const calculateScore = () => {
    getCorrectAnswerCount();
    let length = localStorage.length - 1;
    let score = (correctAs / length) * 100;

    if (isNaN(score)) {
      setScore(0);
    } else {
      setScore(Math.floor(score));
    }
  };

  const saveHistory = async (payload) => {
    let body = {
      user_id: parseInt(payload.user),
      score: payload.score,
      quiz_id: payload.id,
      duration: payload.duration,
      finished: payload.finished,
    };

    try {
      await axios.post(`${process.env.REACT_APP_API_URI}/quiz/${payload.quiz_id}`, body);
      setSaved(true);
    } catch (err) {
      console.log('Couldn\'t Save Score', err);
    }
  };

  // =============================================
  //             Quiz Timer Utilities
  // =============================================
  const setTimer = (time) => {
    /* check if element exists  */
    let timer = document.getElementById("timer");
    
    if (timer) {
      // Set up the Timer
      let timeRemaining = time;

      // let dur = 0;
      let minutes = Math.ceil((timeRemaining / 1000 / 60) << 0);
      let seconds = Math.ceil((timeRemaining / 1000) % 60);

      let updateTimerString = (minutes, seconds) => {
        timer.innerHTML = `${minutes} : ${
          seconds === 0
            ? "00"
            : seconds.toString().length < 2
            ? "0" + seconds
            : seconds
        } left`;
      };

      updateTimerString(minutes, seconds);

      // Update the Timer Based On Time Remaining
      var quizTimer = setInterval(() => {
        minutes = Math.floor((timeRemaining / 1000 / 60) << 0);
        seconds = Math.floor((timeRemaining / 1000) % 60);

        updateTimerString(minutes, seconds);

        // Decrement Time Remaining by 1 second
        timeRemaining -= 1000;
        // dur += 1000;

        // Handle User ran out of time before finishing the quiz
        if (timeRemaining <= 0) {
          // setDuration(dur);
          // calculateDuration();
          console.log('got here');
          clearInterval(quizTimer);
          setFinished(false);
          window.location.href = `/quiz/${id}/summary`;
        }
      }, 1000);
    }
  };

  const handleTimerChange = (e) => {
    setTime(e.target.value);
  };

  const formatDuration = (duration) => {
    let min = Math.ceil((duration / 1000 / 60) << 0);
    let sec = Math.ceil((duration / 1000) % 60);
    
    return `00:${min.toString().length < 2 ? "0" + min : min}:${
      sec === 0 ? "00" : sec.toString().length < 2 ? "0" + sec : sec
    }`;
  };

  // =============================================
  //             Quiz Modal Utils
  // =============================================
  const abandonQuiz = (e, message) => {
    if (e.currentTarget.value === "Yes") {
      resetQuiz();
      if (message === "Back Home") {
        window.location.href = "/";
      } if (message === "Dashboard") {
        window.location.href = isLoggedIn ? "/dashboard" : "/";
      } else {
        window.location.href = `/quiz/${id}/start`;
      } 
    } else {
      setOpen(false);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleQuizStart = () => {
    resetQuiz();
    localStorage.setItem(`start`, JSON.stringify(Date.now()));
  };
  // =============================================
  //           	 Lifecycle Methods
  // =============================================
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

  useEffect(() => {
    if (quizStart && quizEnd) { 
      console.log("Duration from QuizContext", quizEnd - quizStart);
      setDuration(quizEnd - quizStart);
    };
  }, [quizStart, quizEnd]);

  // Set Summary Message based on User's Quiz Score
  useEffect(() => {
    if (finished) {
      console.log('True', finished);
      if (score > 60) {
       setMsg("Congratulations, You Passed!");
     } else if (score <= 60) {
       setMsg("Oh no! You didn't pass, would you like to try again?");
     }
    } else {
      setMsg("Oh no! You ran out of time. Would you like to try again?");
    }
  }, [finished, score, setMsg, duration]);
  
  useEffect(() => {
    correctAs && console.log('corA', correctAs); 
  }, [correctAs]);

  // Context to be used in other components
  const ctx = {
    id,
    quizActive, 
    setQuizActive,

    questions,
    setQuestions,

    quizDetails,
    setQuizDetails,

    resetQuiz,
    handleQuizStart,
    userAnswers,
    getUserAnswers,

    getCorrectAnswerCount,
    correctAs,

    msg,
    setMsg,

    score,
    calculateScore,

    saveHistory,

    finished,
    setFinished,

    duration,
    formatDuration,

    time,
    setTimer,
    handleTimerChange,

    abandonQuiz,
    open,
    handleOpen,
    handleClose,

    calculateDuration,
    saved,
    setSaved,
  };

  // Return the provider component with the context value
  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
};
