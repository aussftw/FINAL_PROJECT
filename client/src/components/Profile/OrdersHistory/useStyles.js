import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  ordersContainer: {
    padding: "0px 10px 0px 10px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 3px 0px 3px",
    },
  },
  root: {
    width: "100%",
  },
  title: {
    margin: "0px 0px 5px 0",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  message: {
    margin: "16px 0px 16px 0",
    textAlign: "center",
  },
}));

export default useStyles;
