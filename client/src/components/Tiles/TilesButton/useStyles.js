import { makeStyles } from "@material-ui/core";
import theme from "../../../theme";

const useStyles = makeStyles({
  btn: {
    letterSpacing: "0.5px",
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
    textTransform: "capitalize",
    padding: "1em 0 1em",
    width: "50%",
    position: "absolute",
    bottom: "10%",
    left: "25%",
    transition: "ease-in-out 0.75s",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
      padding: "0.5em 0 0.5em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      padding: "0.5em 0 0.5em",
    },
  },
});

export default useStyles;
