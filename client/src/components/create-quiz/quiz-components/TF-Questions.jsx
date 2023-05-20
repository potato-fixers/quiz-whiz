import '../styles/create-quiz.css';
import { Button, TextField, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TFQuestions = (props) => {

  return (
    <Grid container className="TFQuestions">
      <Grid item xs={12}>
        <Typography variant="h4" sx={{fontWeight: 400, marginBottom: 2}}> Enter True / False Questions Here </Typography>
        <Typography variant="h6" sx={{fontWeight: 400, marginBottom: 2.5}}> Please Enter only True / False Answer Choices </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              name='TFButton'
              onClick={props.addFields}>
              {" "}
              Add More True / False Questions!
              {" "}
            </Button>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {props.inputFields.map((input, index) => {
                return (
                  <Grid item key={index} xs={12}>
                    <Grid>
                      <Typography variant="h6">
                        Q{index + 1}
                      </Typography>
                    </Grid>
                    <Grid container spacing={2} sx={{marginBottom: 2.5}}>
                      <Grid item xs={2.5} sm={3} lg={4.6} xl={6}>
                        <TextField
                          id="TF"
                          multiline
                          required
                          fullWidth
                          variant="outlined"
                          name='question'
                          value={props.inputFields[index]['question']}
                          rows={4}
                          cols={40}
                          placeholder='Type Question Here'
                          onChange={(e) => {props.handleFormChange(e, index)}}>
                        >
                        </TextField>
                      </Grid>
                    </Grid>
                      <Grid item xs={1.75} sm={2.75} md={6}>
                        <Grid container spacing={2} name="answers">
                          <Grid item>
                            <TextField
                            id="TC"
                            required
                            name='corrAns'
                            value={props.inputFields[index]['corrAns']}
                            placeholder='Correct Answer'
                            onChange={(e) => {props.handleFormChange(e, index)}}>
                            </TextField>
                          </Grid>
                          <Grid item>
                            <TextField
                              id="TF"
                              required
                              name='incAns'
                              value={props.inputFields[index]['incAns']}
                              placeholder='Incorrect Answer'
                              onChange={(e) => {props.handleFormChange(e, index)}}>
                              </TextField>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              endIcon={<DeleteIcon/>}
                              name="TFRemoveButton"
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
                          </Grid>
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
}

export default TFQuestions;