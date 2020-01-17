import { makeStyles } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
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
  },
  icon: {
    color: "black",
    fontSize: "24px",
  },
});

export default useStyles;
