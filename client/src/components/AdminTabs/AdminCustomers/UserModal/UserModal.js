import React, { useState } from "react";
import axios from "axios";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./useStyles";

const UserModal = ({ user, allCustomers, setAllCustomers, isOpen, onClose }) => {
  const classes = useStyles();
  const [ error, setError ] = useState("");

  const closeModal = () => {
    setError("");
    onClose();
  };

  const editAdminHandler = () => {
    const updatedUser = { isAdmin: !user.isAdmin };
      axios
        .put(`/api/customers/${user._id}`, updatedUser)
        .then(response => {
          const updatedCustomers = allCustomers.map(item => {
            if (item._id === user._id) {
              return { ...item, isAdmin: response.data.isAdmin };
              }
            return item;
          });
          setAllCustomers(updatedCustomers);
          closeModal();
        })
        .catch(err => {
          setError(err);
        });
  };

  const resetComments = () => {
    axios
      .delete(`/api/customers/${user._id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        setError(err);
      });
  };

  const message = !user.isAdmin ?
    (`Are you sure to add shop administrator rights to user ${user.firstName} ${user.lastName}?`) :
    (`Are you sure to remove shop administrator rights from user ${user.firstName} ${user.lastName}?`);

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
            {message}
          </Typography>
          <IconButton
            component="span"
            onClick={closeModal}
            className={classes.closeBtn}
          >
            <CloseIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={() => editAdminHandler()}
            className={classes.btn}
          >
            Edit Admin Rights
          </Button>
          <Typography component="h3" align="center" className={classes.message}>
            {`Are you sure to reset comments of user ${user.firstName} ${user.lastName}?`}
          </Typography>
          <Button
            variant="contained"
            onClick={() => resetComments()}
            className={classes.btn}
          >
            Reset Comments
          </Button>
          {error && (
          <Typography component="h3" align="center" className={classes.message}>
            {error.message}
          </Typography>
        )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default UserModal;
