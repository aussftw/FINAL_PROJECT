import React from "react";

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
  const classes = useStyles();

  return (
    <Container className={classes.subscribeContainer} maxWidth>
      <Typography className={classes.subscribeTitle}>NEWSLETTER </Typography>
      <Box className={classes.subscribeBar}>
        <InputBase className={classes.input} placeholder="Your email address" />
        <Button className={classes.actionButton}>Subscribe </Button>
      </Box>
      <Divider variant="middle" />
    </Container>
  );
};

export default Subscribe;
