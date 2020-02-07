import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./useStyles";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      <Typography className={classes.title} align="center" variant="h2">
        Sorry
      </Typography>
      <Typography className={classes.message} align="center" variant="h6">
        We couldn&apos;t find that page
      </Typography>
      <Typography className={classes.message} align="center" variant="h6">
        Try searching or go to&nbsp;
        <Link to="/" className={classes.link}>
          Plantly&apos;s home page
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
