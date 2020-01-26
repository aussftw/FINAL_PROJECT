import { makeStyles } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
  wrapper: {
    display: "inline-flex"
  },
  btn: {
    fontSize: "14px",
    letterSpacing: "0,5px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "5px",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.primary.dark,
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  icon: {
    fontSize: "24px",
  },
  span: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline-flex",
      alignItems: "center",
    },
  },
});

export default useStyles;
