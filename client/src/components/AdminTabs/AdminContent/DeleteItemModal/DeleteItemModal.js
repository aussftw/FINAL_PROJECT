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

const DeleteItemModal = ({ open, handleModal, id, item, handleOpenSnackbar }) => {
  const classes = useStyles();

  const createMessage = () => {

    if (item === "catalog") {
      const itemSingular = "category";

      return (`Are you sure you want to remove this ${itemSingular} from catalog?`);
    }
    const itemSingular = item.slice(0, item.length - 1);

    return (`Are you sure you want to delete this ${itemSingular}?`);

  };

  const deleteItem = () => {
    console.log("axios to", `/api/${item}/${id}`);
    axios
      .delete(`/api/${item}/${id}`)
      .then(resp => {
        const itemSingular = item.slice(0, item.length - 1);
        const success = {type:'success', message:`${itemSingular} was successfully deleted`}
        handleOpenSnackbar(success);
        console.log(resp);
      })
      .catch(err => {
        const itemSingular = item.slice(0, item.length - 1);
        const error = {type:'error', message:`Error! ${itemSingular} wasn’t deleted.`}
        handleOpenSnackbar(error);
        console.log("orders", err);
      });
    handleModal();
    // handleOpenSnackbar();
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
              {createMessage()}
            </Typography>

            <IconButton
              component="span"
              onClick={handleModal}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <Button variant="contained" fullWidth onClick={deleteItem}>
              Delete
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

export default DeleteItemModal;