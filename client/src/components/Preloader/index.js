import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PreloaderAdaptive from "./Adaptive";
import PreloaderDesktop from "./Desktop";
import useStyles from "./useStyles";

const Preloader = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("md"));

  return (
    <>
      {matches && (
        <div>
          <PreloaderDesktop />
        </div>
      )}
      {!matches && (
        <div className={classes.adaptive_preloader}>
          <PreloaderAdaptive />
        </div>
      )}
    </>
  );
};

export default Preloader;
