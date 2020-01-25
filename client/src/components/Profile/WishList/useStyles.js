import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "0px 0px 5px 0",
    padding: 5,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  message: {
    marginTop: 5,
    textAlign: "center",
  },
}));

export default useStyles;
