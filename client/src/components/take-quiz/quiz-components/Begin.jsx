import { useState, useEffect } from "react";
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
import useFetch from "../hooks/useFetch";

function Begin({ setTimer, quizId }) {
  let quizPath = `/quiz/${quizId}/question`;
  let { quizDetails } = useFetch(quizId);
  const [countdown, setCountdown] = useState(300000);

  const handleChange = (e) => {
    setCountdown(e.target.value);
  };

  useEffect(() => {
    countdown && setTimer(countdown);
  }, [countdown, setTimer]);

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

      <Grid id="set-timer" item xs={6}>
        <FormControl fullWidth>
          {/* <InputLabel id="countdown">Timer</InputLabel> */}
          <Select
            labelId="countdown"
            id="countdown"
            value={countdown}
            onChange={handleChange}
          >
            <MenuItem value={30000}>30 Seconds</MenuItem>
            <MenuItem value={60000}>1 Minute</MenuItem>
            <MenuItem value={300000}>5 Minutes</MenuItem>
            <MenuItem value={600000}>10 Minutes</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <div className="flex ms" id="abandon-quiz">
        <Grid item xs={6}>
          <Link to="/dashboard">
            <Button variant="contained" color="secondary">
              Back to My Quizzes
            </Button>
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Link to={quizPath}>
            <Button variant="contained" color="primary">
              Begin Quiz
            </Button>
          </Link>
        </Grid>
      </div>
    </Grid>
  );
}

export default Begin;
