import React, { useState } from "react";
import axios from "axios";
import { Typography, Divider, Container, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import SnackBar from "../common/SnackBar/SnackBar";
import useStyles from "./useStyles";

const Subscribe = () => {
  const [email, setUserEmail] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);
  const classes = useStyles();

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarAddToCart(false);
  };

  const obj = {
    email,
    letterSubject:
      "Congratulations you have successfully subscribed to Planty newsletter",
    letterHtml: "Plantly newsletter",
  };

  const sentUserEmail = async () => {
    setError(false);
    const authOptions = {
      method: "POST",
      url: "/api/subscribers",
      data: obj,
    };

    await axios(authOptions)
      .then(res => {
        return res;
      })
      // eslint-disable-next-line
      .catch(error => {
        setError(true);
        // eslint-disable-next-line
        console.log(error.response);
      });
    setSnackbarAddToCart(true);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentUserEmail();
    }
  };

  return (
    <Container className={classes.subscribeContainer} maxWidth="xl">
      <SnackBar
        open={snackbarAddToCart}
        close={snackbarClose}
        text="You have successfully subscribed!"
      />
      <Typography className={classes.subscribeTitle}>NEWSLETTER</Typography>
      <ValidatorForm
        className={classes.subscribeBar}
        onSubmit={() => sentUserEmail()}
      >
        <TextValidator
          className={classes.input}
          placeholder="Your email address"
          onChange={e => setUserEmail(e.target.value)}
          value={obj.email}
          onKeyPress={handleKeyPress}
          validators={["required", "isEmail"]}
          errorMessages={[]}
          variant="outlined"
        />
        <Button
          className={classes.actionButton}
          variant="contained"
          type="submit"
        >
          Subscribe
        </Button>
      </ValidatorForm>
      <Divider variant="middle" />
    </Container>
  );
};

export default Subscribe;
