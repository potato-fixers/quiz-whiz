import "../styles/create-quiz.css";
import { Button, Grid, Typography } from '@mui/material';

const Difficulty = (props) => {
  return (
    <div className="Diffictuly">
      <Grid item>
        <Typography variant="h4" sx={{fontWeight: 400, marginBottom: 2.5}}> Choose Your Difficutly </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            name="easy"
            id={`difficulty1${props.easyDiff ? "chosen" : ""}`}
            onClick={props.select}>
            {" "}
            Easy
            {" "}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            name="medium"
            id={`difficulty2${props.mediumDiff ? "chosen" : ""}`}
            onClick={props.select}>
            {" "}
            Medium
            {" "}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            name="hard"
            id={`difficulty3${props.hardDiff? "chosen" : ""}`}
            onClick={props.select}>
            {" "}
            Hard
            {" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Difficulty;