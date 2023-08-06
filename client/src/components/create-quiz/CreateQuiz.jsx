import "./styles/create-quiz.css";
import { useState, useContext } from "react";
import { Grid, TextField, Button, Typography } from '@mui/material';
import Categories from "./quiz-components/Categories.jsx";
import Difficulty from "./quiz-components/Difficulty.jsx"
import MCQuestions from "./quiz-components/MC-Questions.jsx";
import TFQuestions from "./quiz-components/TF-Questions.jsx";
import APIQuestions from "./quiz-components/API-Questions.jsx";
import { UserContext } from "../global/UserContext.jsx"

// need useState here for both MC Questions and TF Questions
// state will be passed down to both components along with update functions.

const CreateQuiz = (props) => {

  const { profile } = useContext(UserContext);

   // useStates here
   const [quizName, setQuizName] = useState("");
   const [TFValidation, setTFValidation] = useState([false, false]);
   const [MCValidation, setMCValidation] = useState([false, false, false]);
   const [MCInputFields, setMCInputFields] = useState([
     { question: "", corrAns: "", incAns1: "", incAns2: "", incAns3: "" },
     { question: "", corrAns: "", incAns1: "", incAns2: "", incAns3: "" },
     { question: "", corrAns: "", incAns1: "", incAns2: "", incAns3: "" },
   ]);
   const [TFInputFields, setTFInputFields] = useState([
     { question: "", corrAns: "", incAns: "" },
     { question: "", corrAns: "", incAns: "" },
   ]);
   // create state here to update which category is the selected
   const [category1, setState1] = useState(false);
   const [category2, setState2] = useState(false);
   const [category3, setState3] = useState(false);
   const [category4, setState4] = useState(false);
   const [category5, setState5] = useState(false);
   const [categoryVal, setCategoryVal] = useState(null);
   // create state here to update difficulty selection
   const [easyDiff, setEasyDiff] = useState(false);
   const [mediumDiff, setMediumDiff] = useState(false);
   const [hardDiff, setHardDiff] = useState(false);
   const [difficulty, setDifficulty] = useState(null);

   // useState function
   const onSelect = (e) => {
     e.preventDefault();

     if (e.target.name === "Art") {
       setState1(true);
       setState2(false);
       setState3(false);
       setState4(false);
       setState5(false);
       setCategoryVal(e.target.name);
     } else if (e.target.name === "General Knowledge") {
       setState1(false);
       setState2(true);
       setState3(false);
       setState4(false);
       setState5(false);
       setCategoryVal(e.target.name);
     } else if (e.target.name === "History") {
       setState1(false);
       setState2(false);
       setState3(true);
       setState4(false);
       setState5(false);
       setCategoryVal(e.target.name);
     } else if (e.target.name === "Politics") {
       setState1(false);
       setState2(false);
       setState3(false);
       setState4(true);
       setState5(false);
       setCategoryVal(e.target.name)
     } else if (e.target.name === "Sports") {
       setState1(false);
       setState2(false);
       setState3(false);
       setState4(false);
       setState5(true);
       setCategoryVal(e.target.name)
     } else if (e.target.name === "easy") {
        setEasyDiff(true)
        setMediumDiff(false)
        setHardDiff(false)
        setDifficulty(e.target.name)
     } else if (e.target.name === "medium") {
        setEasyDiff(false)
        setMediumDiff(true)
        setHardDiff(false)
        setDifficulty(e.target.name)
    } else if (e.target.name === "hard") {
        setEasyDiff(false)
        setMediumDiff(false)
        setHardDiff(true)
        setDifficulty(e.target.name)
    }
   };

    const handleFormChange = (e, index) => {
      e.preventDefault();
      if (e.target.id === "MC") {
        var MCdata = [...MCInputFields]
        MCdata[index][e.target.name] = e.target.value
        setMCInputFields(MCdata);
        if (MCdata[index].question === "" || MCdata[index].corrAns === "" || MCdata[index].incAns1 === "" || MCdata[index].incAns2 === "" || MCdata[index].incAns3 === "") {
          var MCValFalse = [...MCValidation]
          MCValFalse[index] = false
          setMCValidation(MCValFalse);
        } else {
          var MCValTrue = [...MCValidation]
          MCValTrue[index] = true;
          setMCValidation(MCValTrue)
        }
      } else {
        if (e.target.name === "corrAns" || e.target.name === "incAns") {
          if (e.target.value === "t" || e.target.value === "T") {
            var TFCorrAnsData = [...TFInputFields]
            TFCorrAnsData[index][e.target.name] = "True"
            setTFInputFields(TFCorrAnsData);
            if (TFCorrAnsData[index].question === "" || TFCorrAnsData[index].corrAns === "" || TFCorrAnsData[index].incAns === "") {
              var TFCorrValFalse = [...TFValidation]
              TFCorrValFalse[index] = false
              setTFValidation(TFCorrValFalse);
            } else {
              var TFCorrAnsValTrue = [...TFValidation]
              TFCorrAnsValTrue[index] = true;
              setTFValidation(TFCorrAnsValTrue)
            }
          } else if (e.target.value === "f" || e.target.value === "F") {
            var TFIncAnsData = [...TFInputFields]
            TFIncAnsData[index][e.target.name] = "False"
            setTFInputFields(TFIncAnsData);
            if (TFIncAnsData[index].question === "" || TFIncAnsData[index].corrAns === "" || TFIncAnsData[index].incAns === "") {
              var TFIncValFalse = [...TFValidation]
              TFIncValFalse[index] = false
              setTFValidation(TFIncValFalse);
            } else {
              var TFAnsValTrue = [...TFValidation]
              TFAnsValTrue[index] = true;
              setTFValidation(TFAnsValTrue)
            }
          } else {
            var TFEmptyAns = [...TFInputFields]
            TFEmptyAns[index][e.target.name] = ""
            setTFInputFields(TFEmptyAns)
            if (TFEmptyAns[index].question === "" || TFEmptyAns[index].corrAns === "" || TFEmptyAns[index].incAns === "") {
              var TFEmptyAnsFalse = [...TFValidation]
              TFEmptyAnsFalse[index] = false
              setTFValidation(TFEmptyAnsFalse);
            } else {
              var TFEmptyAnsTrue = [...TFValidation]
              TFEmptyAnsTrue[index] = true;
              setTFValidation(TFEmptyAnsTrue)
            }
          }
        } else {
          var TFdata = [...TFInputFields]
          TFdata[index][e.target.name] = e.target.value
          setTFInputFields(TFdata);
          if (TFdata[index].question === "" || TFdata[index].corrAns === "" || TFdata[index].incAns === "") {
            var TFValFalse = [...TFValidation]
            TFValFalse[index] = false
            setTFValidation(TFValFalse);
          } else {
            var TFValTrue = [...TFValidation]
            TFValTrue[index] = true;
            setTFValidation(TFValTrue)
          }
        }


      }
    }

   const nameChange = (e) => {
     e.preventDefault();
     setQuizName(e.target.value);
   };

   // button functionality here

    const addFields = (e) => {
      e.preventDefault();
      var newMCField = {
        question: "",
        corrAns: "",
        incAns1: "",
        incAns2: "",
        incAns3: "",
      };
      var newTField = { question: "", corrAns: "", incAns: "" };
      if (
        MCInputFields.length + TFInputFields.length < 20 &&
        e.target.name === "MCButton"
      ) {
        setMCInputFields([...MCInputFields, newMCField]);
        setMCValidation([...MCValidation, false])
      } else if (
        TFInputFields.length + MCInputFields.length < 20 &&
        e.target.name === "TFButton"
      ) {
        setTFInputFields([...TFInputFields, newTField]);
        setTFValidation([...TFValidation, false])
      } else {
        alert("Maximum Questions Reached!");
      }
    };

    const removeFields = (e, index) => {
      e.preventDefault();
      var minQuestions = MCInputFields.length + TFInputFields.length;
      if (e.target.name === "MCRemoveButton" && minQuestions > 5) {
        var MCdata = [...MCInputFields];
        MCdata.splice(index, 1);
        setMCInputFields(MCdata);
        var MCVal = [...MCValidation]
        MCVal.splice(index, 1)
        setMCValidation(MCVal)
      } else if (e.target.name === "TFRemoveButton" && minQuestions > 5) {
        var TFdata = [...TFInputFields];
        TFdata.splice(index, 1);
        setTFInputFields(TFdata);
        var TFVal = [...TFValidation];
        TFVal.splice(index, 1);
        setTFValidation(TFVal);
      } else {
        alert("Minimum Questions Reached!")
      }
  };

    const sendQuiz = (e) => {

      e.preventDefault();
      if (!quizName) {
        alert("Please Enter Quiz Name!")
      } else if (!categoryVal) {
        alert("Please Choose Category!")
      } else if (!difficulty) {
        alert("Please Select Difficulty!")
      } else if (!TFValidation.length) {
        var MCpass = true;
        for (var i = 0; i < MCValidation.length; i++) {
          if (!MCValidation[i]) {
            MCpass = false;
          }
        }
        if (MCpass) {
          var quizDataMC = {
            quizzes: {
            user_id: profile.userId,
            name: quizName,
            difficulty: difficulty,
            category: categoryVal
            },
            questions: JSON.stringify(MCInputFields),
          }

          var optionsMC = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(quizDataMC),
          }

          fetch(`${import.meta.VITE_APP_API_URI}/create/createQuiz`, optionsMC)
            .then( (response) => {
              if (response.status === 200) {
                alert("Quiz Succesfully Created!");
                window.location.href = "/";
              }
            })
            .catch((err) => {
              console.log(err, 'err')
            })
        } else {
          alert("Please Fill Out All MC Question Fields!")
        }

      } else if (!MCValidation.length) {
        var TFpass = true;
        for (var j = 0; j < TFValidation.length; j++) {
          if (!TFValidation[j]) {
            TFpass = false;
          }
        }
        if (TFpass) {
          var quizDataTF = {
            quizzes: {
            user_id: profile.userId,
            name: quizName,
            difficulty: difficulty,
            category: categoryVal
            },
            questions: JSON.stringify(TFInputFields),
          }

          var optionsTF = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(quizDataTF),
          }

          fetch(`${import.meta.env.VITE_APP_API_URI}/create/createQuiz`, optionsTF)
          .then( (response) => {
            if (response.status === 200) {
              alert("Quiz Succesfully Created!");
              window.location.href = "/";
            }
          })
        } else {
          alert("Please Fill Out All TF Question Fields!")
        }
      } else {
        var MCTFpass = true;
        var validationArray = MCValidation.concat(TFValidation)
        for (var k = 0; k < validationArray.length; k++) {
          if (!validationArray[k]) {
            MCTFpass= false;
          }
        }
        if (MCTFpass) {
          var quizDataMCTF = {
            quizzes: {
            user_id: profile.userId,
            name: quizName,
            difficulty: difficulty,
            category: categoryVal
            },
            questions: JSON.stringify(MCInputFields.concat(TFInputFields)),
          }

          var optionsMCTF = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(quizDataMCTF)
          }

          fetch(`${import.meta.env.VITE_APP_API_URI}/create/createQuiz`, optionsMCTF)
          .then( (response) => {
            if (response.status === 200) {
              alert("Quiz Succesfully Created!");
              window.location.href = "/";
            }
          })
        } else {
          alert("Please Fill Out All MC / TF Question Fields or Remove Unused Questions")
        }
      }
    }

    return (
      <Grid container className="createQuiz" spacing={2} sx={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5}}>
        <Grid item>
          <Typography variant="h2"> Create Your Quiz </Typography>
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <div id="quizName">
            <Typography sx={{marginTop: 2.5, marginBottom: 2.5}} variant="h4">Name Your Quiz</Typography>
            <TextField
              value={quizName}
              placeholder={"Enter Quiz Name Here"}
              onChange={nameChange}
            ></TextField>
          </div>
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <Categories
            art={category1}
            general={category2}
            history={category3}
            politics={category4}
            sports={category5}
            select={onSelect}
          />
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <Difficulty
            easyDiff={easyDiff}
            mediumDiff={mediumDiff}
            hardDiff={hardDiff}
            select={onSelect}
          />
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <MCQuestions
            inputFields={MCInputFields}
            setInputFields={setMCInputFields}
            handleFormChange={handleFormChange}
            addFields={addFields}
            removeFields={removeFields}
          />
        </Grid>
        <Grid item xs={12} pb={5}>
          <TFQuestions
            inputFields={TFInputFields}
            setInputFields={setTFInputFields}
            handleFormChange={handleFormChange}
            addFields={addFields}
            removeFields={removeFields}
          />
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <div name="createQuiz">
            <Button
              variant="contained"
              onClick={(e) => {
                if (window.confirm("Submit Quiz?")) {
                sendQuiz(e)
                }
              }}
            >
              {" "}
              Create Quiz!{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sx={{borderBottom: "solid #CEC9C9", borderWidth: 0.1}} pb={5}>
          <APIQuestions
            category={categoryVal}
            difficulty={difficulty}
          />
        </Grid>
      </Grid>
    );
  }

export default CreateQuiz;
