import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "var(--white)",
  border: "2px solid var(--yellow)",
  boxShadow: 24,
  p: 4,
  color: "var(--charcoal)",
  borderRadius: "15px",
};

export default function BasicModal({ message }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    if (e.currentTarget.value === "Yes") {
      if (message === "Home") {
        window.location.href = "/";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      setOpen(false);
    }
  };

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to abandon your progress? Your score will not
            be saved.
          </Typography>

          <Button variant="contained" value="Yes" onClick={handleClick}>
            Yes
          </Button>
          <Button variant="contained" value="No" onClick={handleClick}>
            No
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
