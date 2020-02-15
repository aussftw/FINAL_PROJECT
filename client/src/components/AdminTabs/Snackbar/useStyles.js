import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  snackbar: {
    backgroundColor: theme.palette.primary.main,
  },
  snackbarError: {
    backgroundColor: "rgba(187,55,40,0.82)",
  },
  snackbarMessage: {
    position: "relative",
    top: -6,
    left: 16,
    fontSize: 15,
    paddingRight: "2vw",
  },
}));

export default useStyles;
