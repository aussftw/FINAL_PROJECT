import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  snackbar: {
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  snackbarError: {
    position: "relative",
    backgroundColor: "#f54033",
  },
  snackbarMessage: {
    // paddingLeft: "1%",
  //   position: "absolute",
  //   top: 18,
  //   left: 68,
  //   fontSize: 15,
  },
}));

export default useStyles;
