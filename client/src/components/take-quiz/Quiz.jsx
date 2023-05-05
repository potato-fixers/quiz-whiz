import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import "./styles/take-quiz.css";
import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/Question.jsx";
import Answers from "./quiz-components/Answers.jsx";

function Quiz() {
  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      direction="column"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6}>
        <Timer />
      </Grid>

      <Grid item xs={6}>
        <Question />
      </Grid>

      <Grid item xs={6}>
        <Answers />
      </Grid>

      <Grid item xs={6}>
        <Typography>2/25 Questions</Typography>
      </Grid>

      <Grid item xs={6}>
        <Link to="/quiz/:id/question/:id">
          <Button variant="contained" color="primary">
            &lt;
          </Button>
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Link to="/quiz/:id/question/:id">
          <Button variant="contained" color="primary">
            &gt;
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Quiz;
