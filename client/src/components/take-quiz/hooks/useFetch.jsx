import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function useFetch() {
  let { id } = useParams();
  const [quizDetails, setQuizDetails] = useState([{}]);
  const [questions, setQuestions] = useState([{}]);

  const fetchQuizData = async (id) => {
    try {
      const payload = await axios({
        method: "GET",
        url: `http://ec2-3-83-24-209.compute-1.amazonaws.com:8080/quiz/${id}/start`,
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
        url: `http://ec2-3-83-24-209.compute-1.amazonaws.com:8080/quiz/${id}/question`,
      });
      payload && setQuestions(payload.data);
      console.log("Got PAYLOAD", payload.data);
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
    // questions && console.log("Got Quiz Data", questions);
  }, [questions, id]);

  return {
    id,
    questions,
    setQuestions,
    quizDetails,
    setQuizDetails,
  };
}
