import React, { Dispatch, FC, SetStateAction } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Slide } from "@mui/material";

const style = {
  position: "absolute",
  width: "100%",
  height: "30%",
  bottom: 0,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const TransitionModal: FC<Props> = ({ setOpen, open }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide in={open} direction={"up"} mountOnEnter unmountOnExit>
        <Box sx={style} alignItems="center" justifyContent="center">
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Text
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis
          </Typography>
        </Box>
      </Slide>
    </Modal>
  );
};

export default TransitionModal;
