import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/take-quiz.css";
import {
  Grid,
  Typography,
  Button,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";

import { UserContext } from "../../global/UserContext";
import { QuizContext } from "../context/QuizContext";
import useTimer from '../hooks/useTimer'
import BasicModal from '../Modal'

function Begin() {
  const { quizDetails, id, handleQuizStart } = useContext(QuizContext);
  const { time, handleTimerChange } = useTimer();
  const { isLoggedIn } = useContext(UserContext);

  let buttonText = !isLoggedIn ? "Home" : "Dashboard";

  if (isLoggedIn || quizDetails.user_id === 1) {
    return (
      quizDetails &&
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        direction="column"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* Quiz Information (Category, Difficulty) */}
        <Grid id="category" item xs={6}>
          <Typography id="category">
            {typeof quizDetails.title === "string" &&
              `${quizDetails.title}`.toUpperCase()}
          </Typography>
        </Grid>
  
        <Grid id="category" item xs={6}>
          <Typography>CATEGORY</Typography>
          <Typography id="category">
            {typeof quizDetails.category === "string" &&
              `${quizDetails.category}`.toUpperCase()}
          </Typography>
        </Grid>
  
        <Grid id="difficulty" item xs={6}>
          <Typography>
            {typeof quizDetails.difficulty === "string" &&
              `${quizDetails.difficulty}`.toUpperCase()}
          </Typography>
        </Grid>
  
        {/* User Timer Settings */}
        <Grid id="set-timer" item xs={6}>
          <FormControl fullWidth>
            <Typography id="timer-label">Set A Timer?</Typography>
            <Select
              labelId="time"
              id="time"
              value={time}
              onChange={handleTimerChange}
            >
              <MenuItem value={30000}>30 Seconds</MenuItem>
              <MenuItem value={60000}>1 Minute</MenuItem>
              <MenuItem value={300000}>5 Minutes</MenuItem>
              <MenuItem value={600000}>10 Minutes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
  
        {/* Navigation  */}
        <div className="buttons flex-sb mmt">
          <Grid item xs={6}>
            <Link to="/dashboard">
              <Button variant="contained" color="primary">
                {buttonText}
              </Button>
            </Link>
          </Grid>
  
          <Grid item xs={6}>
            <Link to={`/quiz/${id}/question`}>
              <Button  onClick={handleQuizStart} variant="contained" color="primary">
                Begin &gt;
              </Button>
            </Link>
          </Grid>
        </div>
      </Grid>
    );
  } else if (!quizDetails || quizDetails.user_id !== 1) {
    return (<BasicModal type='private-quiz'></BasicModal>)
  } 
}

export default Begin;
