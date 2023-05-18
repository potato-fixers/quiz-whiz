import "../styles/create-quiz.css";
import { Button, Grid, Typography, Box} from '@mui/material';


const Categories = (props) => {
  return (
    <div className="Categories">
      <Box>
        <Typography variant="h4" sx={{fontWeight: 400, marginBottom: 2.5}}> Choose Your Category </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            name="Art"
            id={`category1${props.art ? "chosen" : ""}`}
            onClick={props.select}
          >
            {" "}
            Art{" "}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            name="General Knowledge"
            id={`category2${props.general ? "chosen" : ""}`}
            onClick={props.select}
          >
            {" "}
            General Knowledge{" "}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            name="History"
            id={`category3${props.history ? "chosen" : ""}`}
            onClick={props.select}
          >
            {" "}
            History{" "}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            name="Politics"
            id={`category4${props.politics ? "chosen" : ""}`}
            onClick={props.select}
          >
            {" "}
            Politics{" "}
          </Button>
        </Grid>
        <Grid item>
        <Button
        variant="contained"
        name="Sports"
        id={`category5${props.sports ? "chosen" : ""}`}
        onClick={props.select}
      >
        {" "}
        Sports{" "}
      </Button>
        </Grid>
      </Grid>





    </div>
  );
};

export default Categories;
