import { useContext } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { QuizContext } from "./context/QuizContext";

export default function BasicModal({ message }) {
  const { open, handleOpen, handleClose, abandonQuiz } =
    useContext(QuizContext);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {message}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="take-quiz-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to abandon your progress? Your score will not
            be saved.
          </Typography>

          <Button
            variant="contained"
            value="Yes"
            onClick={(e) => abandonQuiz(e, message)}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            value="No"
            onClick={(e) => abandonQuiz(e, message)}
          >
            No
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
