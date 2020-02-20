import React, { useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PreloaderAdaptiveSmall from "../../../Preloader/AdaptiveSmall";

import useStyles from "./useStyles";

const UserModal = ({ user, setOneUserData, allCustomers, setAllCustomers, isOpen, onClose }) => {
  const classes = useStyles();
  const [ isLoadingAdmin, setIsLoadingAdmin ] = useState(false);
  const [ isLoadingRating, setIsLoadingRating ] = useState(false);
  const [ isLoadingEnabled, setIsLoadingEnabled ] = useState(false);
  const [ message, setMessage ] = useState("");
  const adminId = jwt(localStorage.getItem("authToken")).id;

  const closeModal = () => {
    setMessage("");
    onClose();
  };
  const editAdminHandler = () => {
    const updatedUser = { isAdmin: !user.isAdmin };
    setMessage("");
    setIsLoadingAdmin(true);
      axios
        .put(`/api/customers/${user._id}`, updatedUser)
        .then(response => {
          const updatedCustomers = allCustomers.map(item => {
            if (item._id === user._id) {
              return { ...item, isAdmin: response.data.isAdmin };
              }
            return item;
          });
          setOneUserData(response.data);
          setAllCustomers(updatedCustomers);
          setIsLoadingAdmin(false);
        })
        .catch(err => {
          setMessage(err.response);
          setIsLoadingAdmin(false);
        });
  };

  const editEnabledHandler = () => {
    const updatedUser = { enabled: !user.enabled };
    setMessage("");
    setIsLoadingEnabled(true);
    axios
      .put(`/api/customers/${user._id}`, updatedUser)
      .then(response => {
        const updatedCustomers = allCustomers.map(item => {
          if (item._id === user._id) {
            return { ...item, enabled: response.data.enabled };
          }
          return item;
        });
        setOneUserData(response.data);
        setAllCustomers(updatedCustomers);
        setIsLoadingEnabled(false);
      })
      .catch(err => {
        setMessage(err.response);
        setIsLoadingEnabled(false);
      });
  };

  const resetRating = () => {
    const userId = { "userId": user._id };
    setMessage("");
    setIsLoadingRating(true);
    axios
      .delete("/api/rating/", {data: userId})
      .then(response => {
        setIsLoadingRating(false);
        setMessage(response.data.message);
      })
      .catch(err => {
        setIsLoadingRating(false);
        setMessage(err.response.data.message);
      });
  };

  const adminQuestion = !user.isAdmin ?
    ("Are you sure to add shop administrator rights to user?") :
    ("Are you sure to remove shop administrator rights from user?");

  const adminEditButtonText = user.isAdmin ? "remove admin rights" : "add admin rights";

  const enableQuestion = !user.enabled ?
    ("Are you sure to add read/write rights to user?") :
    ("Are you sure to assign read-only rights to user?");

  const enableEditButtonText = user.enabled ? "disable user" : "enable user";

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box className={classes.modal}>
          <Typography component="h3" align="center" className={classes.message}>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography component="h3" align="center" className={classes.message}>
            {adminQuestion}
          </Typography>
          <IconButton
            component="span"
            onClick={closeModal}
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          {isLoadingAdmin ? <PreloaderAdaptiveSmall /> : (
            <Button
              variant="contained"
              onClick={() => editAdminHandler()}
              className={classes.btn}
              disabled={adminId === user._id}
            >
              {adminEditButtonText}
            </Button>
          )}
          <Typography component="h3" align="center" className={classes.message}>
            {enableQuestion}
          </Typography>
          {isLoadingEnabled ? <PreloaderAdaptiveSmall /> : (
            <Button
              variant="contained"
              onClick={() => editEnabledHandler()}
              className={classes.btn}
              disabled={adminId === user._id}
            >
              {enableEditButtonText}
            </Button>
          )}
          <Typography component="h3" align="center" className={classes.message}>
            Are you sure to reset user rating list?
          </Typography>
          {isLoadingRating ? <PreloaderAdaptiveSmall /> : (
            <Button
              variant="contained"
              onClick={() => resetRating()}
              className={classes.btn}
            >
              Reset Rating
            </Button>
          )}
          {message && (
          <Typography component="h3" align="center" className={classes.message}>
            {message}
          </Typography>
        )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
