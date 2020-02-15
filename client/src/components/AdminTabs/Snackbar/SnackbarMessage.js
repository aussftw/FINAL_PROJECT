import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import ErrorIcon from '@material-ui/icons/Error';
import { Box } from "@material-ui/core";
import useStyles from "./useStyles";


const SnackbarMessage = ({ openSnackbar, handleCloseSnackbar, type }) => {
  const classes = useStyles();

  const snackbar = () => {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={1500}
      >
        <SnackbarContent
          className={type.type==="error" ? classes.snackbarError: classes.snackbar}
          role="alert"
          message={(
            <Box>
              {type.type==="error" ? <ErrorIcon /> : <CheckCircleRoundedIcon /> }
              <span className={classes.snackbarMessage}>
                {type.message}
              </span>
            </Box>
          )}
        />
      </Snackbar>
    );
  };

  return snackbar();
};

export default SnackbarMessage;