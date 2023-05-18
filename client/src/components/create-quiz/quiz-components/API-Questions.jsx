import "../styles/create-quiz.css";
import { useState, useEffect } from "react";
import { Button, TextField, Grid, Box, Typography} from '@mui/material';
const APIQuestions = (props) => {

  const [render, setRender] = useState(false);
  const [ apiData, setAPIData] = useState([])
  const [ reload, setReload ] = useState(false)

  const apiURL = "https://opentdb.com/api.php?amount=5"

  useEffect( () => {
    setReload(false)
    if (!props.category || !props.difficulty) {
      setRender(false)
    } else {
      setRender(true);
        // api call to whatever point we were using
        //https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple
        // url looks like the above,
        // sports = 21
        // history = 23
        // politics = 24
        // general = 9
        // art = 25
        if (props.category === "General Knowledge") {
          var categoryGK = 9;
          var urlGK = apiURL + `&category=${categoryGK}&difficulty=${props.difficulty}`
          var optionsGK = {
            method: "GET"
          }

          fetch(urlGK, optionsGK)
          .then ( (response) => {
            var data = response.json()
            return data
            .then ( (res) => {
              setAPIData(res.results)
            })
          })
        } else if (props.category === "Art") {
          var categoryA = 25;
          var urlA = apiURL + `&category=${categoryA}&difficulty=${props.difficulty}`
          var optionsA = {
            method: "GET"
          }

          fetch(urlA, optionsA)
          .then ( (response) => {
            var data = response.json()
            return data
            .then ( (res) => {
              setAPIData(res.results)
            })
          })
        } else if (props.category === "History") {
          var categoryH = 23;
          var urlH = apiURL + `&category=${categoryH}&difficulty=${props.difficulty}`
          var optionsH = {
            method: "GET",
          }

          fetch(urlH, optionsH)
          .then ( (response) => {
            var data = response.json()
            return data
            .then ( (res) => {
              setAPIData(res.results)
            })
          })
        } else if (props.category === "Politics") {
          var categoryP = 24
          var urlP = apiURL + `&category=${categoryP}&difficulty=${props.difficulty}`
          var optionsP = {
            method: "GET",
          }

          fetch(urlP, optionsP)
          .then ( (response) => {
            var data = response.json()
            return data
            .then ( (res) => {
              setAPIData(res.results)
            })
          })
        } else if (props.category === "Sports") {
          var categoryS = 21;
          var urlS = apiURL + `&category=${categoryS}&difficulty=${props.difficulty}`
          var optionsS = {
            method: "GET",
          }

          fetch(urlS, optionsS)
          .then ( (response) => {
            var data = response.json()
            return data
            .then ( (res) => {
              setAPIData(res.results)
            })
          })
        }
    }
  }, [props.category, props.difficulty, reload])

  if (render) {
    return (
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" sx={{fontWeight: 400}}> Need Help? </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            {apiData.map( (currQuestion, index) => {
              return (
                <Grid item xs={12} key={'TF' + index}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">Q{index + 1} {currQuestion.question}</Typography>
                    </Grid>
                    <Grid item>
                      <div name="answer choices">
                          <Typography sx={{fontWeight: "bold"}}>
                            Correct Answer: {currQuestion.correct_answer}
                          </Typography>
                          <div>
                            {currQuestion.incorrect_answers.map( (currAns, index ) => {
                              return (
                                <Typography> Incorrect Answer: {currAns}</Typography>
                              )
                            })
                            }
                          </div>
                        </div>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={ (e) => { setReload(true)}}>
            Reload
          </Button>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <h3> Select Category / Difficulty For Helper Questions !</h3>
    )
  }
}

export default APIQuestions