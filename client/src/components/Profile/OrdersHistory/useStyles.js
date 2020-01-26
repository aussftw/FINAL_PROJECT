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
    padding: 5,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  message: {
    margin: "16px 0px 16px 0",
    textAlign: "center",
  },
}));

export default useStyles;
