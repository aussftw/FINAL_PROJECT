import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    padding: 5,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  message: {
    marginTop: 5,
    textAlign: "center",
  },
}));

export default useStyles;
