import "../styles/create-quiz.css";
import { Button, TextField, Grid, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MCQuestions = (props) => {
  return (
    <Grid container className="MCQuestions">
      <Grid item>
        <Typography variant="h4" sx={{fontWeight: 400, marginBottom: 2.5}}> Enter Multiple Choice Questions Here </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              name="MCButton"
              onClick={props.addFields}
            >
              {" "}
              Add More Multiple Choice Questions!
              {" "}
            </Button>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {props.inputFields.map((input, index) => {
                return (
                  <Grid item spacing={2} key={index} lg={12}>
                    <Grid>
                      <Typography variant="h6">
                        Q{index + 1}
                      </Typography>
                    </Grid>
                    <Grid container spacing={2} xs={4} md={12}>
                      <Grid item>
                        <TextField
                          id="MC"
                          multiline
                          required
                          fullWidth
                          variant="outlined"
                          name="question"
                          value={props.inputFields[index]["question"]}
                          rows={4}
                          placeholder="Type Question Here"
                          onChange={(e) => {
                            props.handleFormChange(e, index);
                          }}
                        >
                        </TextField>
                      </Grid>
                      <Grid item>
                        <Grid container spacing={2} name="answers">
                          <Grid item>
                            <TextField
                            id="MC"
                            required
                            name="corrAns"
                            value={props.inputFields[index]["corrAns"]}
                            placeholder="Correct Answer"
                            onChange={(e) => {
                              props.handleFormChange(e, index);
                            }}>
                            </TextField>
                          </Grid>
                          <Grid item>
                            <TextField
                              id="MC"
                              required
                              name="incAns1"
                              value={props.inputFields[index]["incAns1"]}
                              placeholder="Incorrect Answer"
                              onChange={(e) => {
                                props.handleFormChange(e, index);
                              }}>
                              </TextField>
                          </Grid>
                          <Grid item>
                            <TextField
                              id="MC"
                              required
                              name="incAns2"
                              value={props.inputFields[index]["incAns2"]}
                              placeholder="Incorrect Answer"
                              onChange={(e) => {
                                props.handleFormChange(e, index);
                              }}>
                              </TextField>
                          </Grid>
                          <Grid item>
                            <TextField
                            id="MC"
                            required
                            name="incAns3"
                            value={props.inputFields[index]["incAns3"]}
                            placeholder="Incorrect Answer"
                            onChange={(e) => {
                              props.handleFormChange(e, index);
                            }}>
                            </TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item >
                        <Box justify="center'">
                          <Button
                            variant="contained"
                            endIcon={<DeleteIcon/>}
                            name="MCRemoveButton"
                            onClick={ (e) => {
                              if(window.confirm('Are you sure?')) {
                                props.removeFields(e, index);
                              }
                            }}
                          >
                            {" "}
                            Remove
                            {" "}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MCQuestions;
