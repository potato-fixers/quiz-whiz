import { useContext } from 'react';

// Context
import { GlobalContext } from '../../global/GlobalContext.jsx';
import { QuizContext } from '../context/QuizContext.jsx';

export default function useTimer() {

  const { URLREGEX } = useContext(GlobalContext);
  const { time, setTime, id, setFinished } = useContext(QuizContext);
  
  const setTimer = (time) => {

    /* check if element exists  */
    let timer = document.getElementById("timer");
    
    if (timer) {
      
      // Set up the Timer
      let timeRemaining = time;

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

        // Handle User ran out of time before finishing the quiz
        if (timeRemaining <= 0 && window.location.href.match(URLREGEX)) {
          clearInterval(quizTimer);
          setFinished(false);
          window.location.href = `/quiz/${id}/summary`;
        } else if (!window.location.href.match(URLREGEX)){
          clearInterval(quizTimer);
          console.log('Cancelled timer');
        }
      }, 1000);
    }
  };

  const handleTimerChange = (e) => {
    setTime(e.target.value);
  }; 

  return {
    time,
    setTimer,
    handleTimerChange
  }
};