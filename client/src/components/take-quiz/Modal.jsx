import { useState, useEffect, useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { QuizContext } from "./context/QuizContext";

export default function BasicModal({ type, message }) {
  const { open, handleOpen, handleClose, abandonQuiz } =
    useContext(QuizContext);
  const lValue = type && (type === 'abandon-quiz') ? 'Yes' : 'No, Take Me Home';
  const rValue = type && (type === 'abandon-quiz') ? 'No' : 'Create an Account';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (type && type === 'private-quiz') {
      setTimeout(() => {
        setVisible(true);
      }, 200)
    }
  }, [type]);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {message}
      </Button>
      <Modal
        open={(type && type === 'private-quiz') ? visible : open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="take-quiz-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {type && type === 'abandon-quiz' ? 'Are you sure you want to abandon your progress? Your score will not be saved.' : 'Sorry, you\'re trying to access a private quiz. Would you like to sign up for an account so you can access all quizzes?'}
          </Typography>

          <Button
            variant="contained"
            value={lValue}
            onClick={(e) => abandonQuiz(e, message)}
          >
            {lValue}
          </Button>

          <Button
              variant="contained"
              value={rValue}
              onClick={(e) => abandonQuiz(e, message)}
            >
            {rValue}
          </Button>
          {type && type === 'private-quiz'? (
            <Button
              variant="contained"
              value="Login"
              onClick={(e) => abandonQuiz(e, message)}
            >
              Login
            </Button>
          )
           : <></>}
        </Box>
      </Modal>
    </div>
  );
}
