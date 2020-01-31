import React, { useState } from "react";
import axios from "axios";
import { Typography, Divider, Container, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "./useStyles";

const Subscribe = () => {
  const [email, setUserEmail] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const classes = useStyles();

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
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentUserEmail();
    }
  };

  return (
    <Container className={classes.subscribeContainer} maxWidth="xl">
      <Typography className={classes.subscribeTitle}>NEWSLETTER</Typography>
      <ValidatorForm
        className={classes.subscribeBar}
        onSubmit={() => sentUserEmail()}
      >
        <TextValidator
          className={classes.input}
          placeholder="Your email address"
          onChange={e => setUserEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          validators={["isEmail", "required"]}
          errorMessages={["This email is not valid"]}
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
