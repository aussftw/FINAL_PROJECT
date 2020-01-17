import React from "react";

import Container from "@material-ui/core/Container";
import TilesPanel from "../Tiles/TilesPanel/TilesPanel";

const HomePage = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      <TilesPanel />
    </Container>
  );
};
export default HomePage;
