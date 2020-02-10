import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { Box } from "@material-ui/core";
import useStyles from "./useStyles";

/* function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} */

const SnackbarMessage = ({ openSnackbar, handleCloseSnackbar, type }) => {
  const classes = useStyles();

  
  const snackbar = () => {
    return (
      /*      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success">
                {message}
              </Alert>
            </Snackbar> */
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

            // className={classes.snackbarError}

          className={classes.snackbar}

          role="alert"
          message={(
            <Box>
              <CheckCircleRoundedIcon />
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