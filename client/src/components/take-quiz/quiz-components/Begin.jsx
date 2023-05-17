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

function Begin() {
  const { quizDetails, id, resetQuiz, time, handleTimerChange } =
    useContext(QuizContext);
  const { isLoggedIn } = useContext(UserContext);

  let buttonText = !isLoggedIn ? "Home" : "Dashboard";

  const handleClick = () => {
    resetQuiz();
    localStorage.setItem(`start`, JSON.stringify(Date.now()));
  };

  return (
    <Grid
      id="quiz-grid"
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
        {/* <Typography>Difficulty</Typography> */}
        <Typography>
          {typeof quizDetails.difficulty === "string" &&
            `${quizDetails.difficulty}`.toUpperCase()}
        </Typography>
      </Grid>

      {/* User Timer Settings */}
      <Grid id="set-timer" item xs={6}>
        <FormControl fullWidth>
          {/* <InputLabel id="time">Timer</InputLabel> */}
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
      <div className="flex ms" id="abandon-quiz">
        <Grid item xs={6}>
          <Link to="/dashboard">
            <Button variant="contained" color="primary">
              &lt; {buttonText}
            </Button>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to={`/quiz/${id}/question`}>
            <Button onClick={handleClick} variant="contained" color="primary">
              Begin &gt;
            </Button>
          </Link>
        </Grid>
      </div>
    </Grid>
  );
}

export default Begin;
