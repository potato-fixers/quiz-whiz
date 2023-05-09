import { Link } from "react-router-dom";
import "../styles/take-quiz.css";
import { Grid, Typography, Button } from "@mui/material";
import useFetch from "../hooks/useFetch";

function Begin({ quizId }) {
  let quizPath = `/quiz/${quizId}/question`;
  let { quizDetails } = useFetch(quizId);

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
        <Typography>Set Timer Drop-Down</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Category:{" "}
          {typeof quizDetails.category === "string" &&
            `${quizDetails.category}`.toUpperCase()}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>
          Difficulty:{" "}
          {typeof quizDetails.difficulty === "string" &&
            `${quizDetails.difficulty}`.toUpperCase()}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Link to={quizPath}>
          <Button variant="contained" color="primary">
            Begin Quiz
          </Button>
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Link to="/dashboard">
          <Button variant="contained" color="secondary">
            Back to My Quizzes
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Begin;
