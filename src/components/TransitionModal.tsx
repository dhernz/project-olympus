import React, { Dispatch, FC, Fragment, SetStateAction } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Slide } from "@mui/material";
import { IMarker } from "./Marker";

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
  marker: IMarker | null;
}

const TransitionModal: FC<Props> = ({ setOpen, open, marker }) => {
  const handleClose = () => setOpen(false);
  const handleClick = (claim: string) => {
    const claimed = claim !== "Unclaimed";
    const link = claimed
      ? "https://projectolympus.8thwall.app/hack-house/start"
      : "https://projectolympus.8thwall.app/hack-house/claim";
    window.open(link, "_blank");
  };

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
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {marker ? (
              <Fragment>
                <h2>{marker.title}</h2>
                <h3 style={{ color: "#56cfe1" }}>{marker.claim}</h3>
                <p style={{ color: "#fe0708" }}>{marker.health}</p>
                <p style={{ color: "#7851DF" }}>{marker.streak}</p>
                <Button
                  variant="contained"
                  onClick={() => handleClick(marker.claim)}
                >
                  {marker.button}
                </Button>
              </Fragment>
            ) : null}
          </Typography>
        </Box>
      </Slide>
    </Modal>
  );
};

export default TransitionModal;
