import React from "react";

import useStyle from "./useStyle";

const PreloaderDesktop = () => {
  const classes = useStyle();

  return (
    <div className={classes.outerwrapper}>
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.stalk} />
          <div className={classes.leafFirst} />
          <div className={classes.leafSecond} />
          <div className={classes.leafThird} />
        </div>
        <div className={classes.topPot} />
        <div className={classes.pot}>
          <div className={classes.leftSide} />
          <div className={classes.rightSide} />
          <div className={classes.shadow} />
        </div>
      </div>
    </div>
  );
};

export default PreloaderDesktop;
