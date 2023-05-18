import { useState, useEffect, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Context
import { GlobalContext } from "../../global/GlobalContext"
import { UserContext } from "../../global/UserContext";

// Create the context object
export const QuizContext = createContext();

// Create the provider component
export const QuizProvider = ({ children }) => {
 
  // Set up state variables here
  let { id } = useParams();
  const { isLoggedIn } = useContext(UserContext);
  const { path, setPath, URLREGEX } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
 
  const [quizDetails, setQuizDetails] = useState([{}]);
  const [quizStart, setQuizStart] = useState(null);
  const [quizActive, setQuizActive] = useState(localStorage.getItem('quizActive'));
  
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

  // Get Current Quiz Data for User (based on quiz id)
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
      quizQs && setQuestions(quizQs);
    } catch (err) {
      console.log("There was an error getting your questions", err);
    }
  };

  // Clear Old Answers, Duration, Status, and Score from Previous Quizzes
  const resetQuiz = () => {
    localStorage.clear();
    setScore(0);
    setSaved(false);
    setDuration(0);
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
    let length = localStorage.length - 2;
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
      let res = await axios.post(`${process.env.REACT_APP_API_URI}/quiz/${payload.quiz_id}`, body);
      if (res.status === 200) {
        setSaved(true);
        console.log('saved');
        // cb(null, 'saved')
      }
    } catch (err) {
      console.log(err);
      // cb('Couldn\'t Save Score', err);
    }
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
    localStorage.setItem(`quizActive`, 1);
  };

  const resetStyles = () => {
    document.querySelectorAll('.btn').forEach(item => {
      item.setAttribute('style', 'null')
    })
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
    if (quizStart) { 
      if (quizEnd) {
        setDuration(quizEnd - quizStart);
      }
    };
  }, [quizStart, quizEnd]);
  
  // Set Summary Message based on User's Quiz Score
  useEffect(() => {
    if (finished) {
      if (score > 60) {
       setMsg("Congratulations, You Passed!");
     } else if (score <= 60) {
       setMsg("Oh no! You didn't pass, would you like to try again?");
     }
    } else {
      setMsg("Oh no! You ran out of time. Would you like to try again?");
    }
  }, [finished, score, setMsg, duration]);

  // Context to be used in other components
  const ctx = {
    id,

    questions,
    setQuestions,

    quizDetails,
    setQuizDetails,
    
    time, 
    setTime,

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

    abandonQuiz,
    open,
    handleOpen,
    handleClose,

    calculateDuration,
    saved,
    setSaved,
    resetStyles
  };

  // Return the provider component with the context value
  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
};
