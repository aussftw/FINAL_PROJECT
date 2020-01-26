import React from "react";

import Container from "@material-ui/core/Container";
import TilesPanel from "../Tiles/TilesPanel/TilesPanel";
import useStyles from './useStyles';

const TilesContainer = () => {
  const classes = useStyles();

  return (
    <Container disableGutters className={classes.container}>
      <TilesPanel />
    </Container>
  );
};
export default TilesContainer;
