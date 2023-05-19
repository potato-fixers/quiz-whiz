import { useState, useContext } from "react";
import { Grid, Typography } from "@mui/material";
import "./styles/take-quiz.css";
import Pagination from "./Pagination.jsx";

// Components
import Timer from "./quiz-components/Timer.jsx";
import Question from "./quiz-components/QuestionText.jsx";
import Answers from "./quiz-components/Answers.jsx";
import BasicModal from './Modal'

// Context
import { QuizContext } from "./context/QuizContext";
import { UserContext } from "../global/UserContext";

function QuizQuestion() {
  const [page, setPage] = useState(1);
  const { id, questions, quizDetails } = useContext(QuizContext);
  const { isLoggedIn } = useContext(UserContext);

  const onPageChange = (val) => {
    setPage(val);
  };

  if (isLoggedIn || quizDetails.user_id === 1) {
    if (questions.length > 1) {
      return (
        <>
          <Grid
            alignItems="center"
            justifyContent="center"
            container
            direction="column"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Timer id={id} />
            </Grid>
  
            <Grid item xs={6}>
              <Question
                quizId={id}
                question={questions && questions[page - 1].question}
                currentKey={questions[page - 1]}
              />
            </Grid>
  
            <Grid id="answers" item xs={6}>
              <Answers page={page} answers={questions[page - 1]} />
            </Grid>
  
            <div className="footer flex-se">
                <Typography id="questions-remaining">
                  {page}/{questions.length} Questions
                </Typography>
              
                <Pagination
                  quizId={id}
                  onPageChange={onPageChange}
                  currentPage={page}
                  totalQuestions={questions.length}
                  pageSize={1}
                />
            </div> 

          </Grid>
        </>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  } else if (!quizDetails || quizDetails.user_id !== 1) {
    return (<BasicModal type='private-quiz'></BasicModal>)
  } 
  
}

export default QuizQuestion;
