import React, { useState, useEffect } from "react";
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

// import MainButton from "../common/buttons/MainButton";

const Subscribe = () => {
  const [userEmail, setUserEmail] = useState("");
  const classes = useStyles();

  const sentUserEmail = () => {
    console.log("get");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentUserEmail();
    }
  };

  return (
    <Container className={classes.subscribeContainer} maxWidth>
      <Typography className={classes.subscribeTitle}>NEWSLETTER </Typography>
      <Box className={classes.subscribeBar}>
        <InputBase
          className={classes.input}
          placeholder="Your email address"
          onChange={e => setUserEmail(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button className={classes.actionButton} onClick={sentUserEmail}>
          Subscribe{" "}
        </Button>
      </Box>
      <Divider variant="middle" />
    </Container>
  );
};

export default Subscribe;
