import React from "react";

import useStyle from "./useStyle";

const PreloaderAdaptive = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <i className={classes.adaptive}>
        <i className={classes.adaptive}>
          <i className={classes.adaptive}>
            <i className={classes.adaptive}>
              <i className={classes.adaptive}>
                <i />
              </i>
            </i>
          </i>
        </i>
      </i>
    </div>
  );
};

export default PreloaderAdaptive;
