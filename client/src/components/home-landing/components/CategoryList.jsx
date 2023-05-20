import { Button, Grid} from '@mui/material';
const CategoryList = (props) => {

  const handleClick = (event) => {
    props.setCategory(event.target.name);
  }

  return (
    <Grid className="landing_category_list" container spacing={2} alignItems="center"
    justifyContent="center">
      <Grid item>
        <Button
          variant="contained"
          name="Art"
          id={`category1${props.category === "Art" ? "chosen" : ""}`}
          onClick={handleClick}
        >
          {" "}
          Art{" "}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          name="General Knowledge"
          id={`category1${props.category === "General Knowledge" ? "chosen" : ""}`}
          onClick={handleClick}
        >
          {" "}
          General Knowledge{" "}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          name="History"
          id={`category1${props.category === "History" ? "chosen" : ""}`}
          onClick={handleClick}
        >
          {" "}
          History{" "}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          name="Policits"
          id={`category1${props.category === "Policits" ? "chosen" : ""}`}
          onClick={handleClick}
        >
          {" "}
          Policits{" "}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          name="Sports"
          id={`category1${props.category === "Sports" ? "chosen" : ""}`}
          onClick={handleClick}
        >
          {" "}
          Sports{" "}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CategoryList;