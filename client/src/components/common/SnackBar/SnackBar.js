import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Box from "@material-ui/core/Box";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import useStyles from "./useStyles"

const SnackBar = ({open, close, text}) => {
    const classes = useStyles();

    return (
      <Snackbar
        anchorOrigin={{
            vertical: "top",
            horizontal: "left",
        }}
        open={open}
        onClose={close}
        autoHideDuration={2000}
      >
        <SnackbarContent
          className={classes.snackbar}
          role="alert"
          message={(
            <Box className={classes.snackbarBox}>
              <CheckCircleRoundedIcon />
              <span className={classes.snackbarMessage}>
                {text}
              </span>
            </Box>
            )}
        />
      </Snackbar>
    )
};

export default SnackBar;