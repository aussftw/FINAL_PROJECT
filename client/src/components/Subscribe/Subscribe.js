import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Divider,
  Container,
  InputBase,
  Box,
  Button,
} from "@material-ui/core";
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
    letterHtml: "fancyLetter",
  };

  const sentUserEmail = async () => {
    setError(false);
    const authOptions = {
      method: "POST",
      url: "/subscribers",
      data: obj,
    };

    await axios(authOptions)
      .then(res => {
        return res;
      })
      // eslint-disable-next-line
      .catch(error => {
        setError(true);
      });

    // await setUserEmail("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentUserEmail();
    }
  };

  return (
    <Container className={classes.subscribeContainer} maxWidth>
      <Typography className={classes.subscribeTitle}>NEWSLETTER</Typography>
      <Box className={classes.subscribeBar}>
        <InputBase
          className={classes.input}
          placeholder="Your email address"
          onChange={e => setUserEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button className={classes.actionButton} onClick={sentUserEmail}>
          Subscribe
        </Button>
      </Box>
      <Divider variant="middle" />
    </Container>
  );
};

export default Subscribe;
