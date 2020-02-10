import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./useStyles";
// import MuiAlert from "@material-ui/lab/Alert";
// import Snackbar from "@material-ui/core/Snackbar";
// import SnackbarContent from "@material-ui/core/SnackbarContent";
// import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const CancelOrder = ({ open, handleModal, id, orderNo, handleOpenSnackbar }) => {
  const classes = useStyles();

  const cancelOrder = () => {
    console.log(id);
    console.log(orderNo);
    axios
      .put(`/api/orders/cancel/${id}`)
      .then(resp => {
        const success = {type:'success', message:`${orderNo} was successfully deleted`}
        handleOpenSnackbar(success);
        console.log(resp);
      })
      .catch(err => {

        const error = {type:'error', message:`Error! ${orderNo} wasn’t deleted.`}
        handleOpenSnackbar(error);
        console.log("orders", err.response);
      });
    handleModal();
  };


  const modal = () => {
    return (
      <Modal
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalBox}>
            <Typography
              component="h2"
              align="center"
              className={classes.message}
            >
           `Are you sure you want cancel order № ${}`
            </Typography>

            <IconButton
              component="span"
              onClick={handleModal}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <Button variant="contained" fullWidth onClick={cancelOrder}>
              Cancel
            </Button>
          </Box>
        </Fade>
      </Modal>
    );
  };


  return (
    <div>
      {modal()}
    </div>
  );

};

export default CancelOrder;