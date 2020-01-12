import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link, Switch, Route } from "react-router-dom";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

import MainButton from "../buttons/MainButton";
import RegistrationForm from "../../RegistrationForm";
import LoginForm from "../../LoginForm";
import ModalHeader from "./ModalHeader";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    minWidth: "40vw",
  },
  icon: {
    colors: theme.palette.primary.main,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLogin] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleLogin = () => {
  //
  //   if (isLogin) {
  //     setIsLogin(false);
  //   } else {
  //     setIsLogin(true);
  //   }
  //   handleClose();
  // };

  return (
    <div>
      <p>{isLogin ? "Welcome , user.name" : ""}</p>

      {isLogin ? (
        <Link to="/profile">
          <AccountCircleSharpIcon
            className={classes.icon}
            fontSize="large"
            color="primary"
          />
        </Link>
      ) : (
        <Link to="/login">
          <MainButton
            text="Sign In"
            variant="outline"
            type="button"
            onClick={handleOpen}
          />
        </Link>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalHeader />
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <Route path="/registration" component={RegistrationForm} />
            </Switch>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
