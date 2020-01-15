import { makeStyles } from "@material-ui/core";
import theme from "../../../theme";

const useStyles = makeStyles({
  btn: {
    fontSize: "14px",
    letterSpacing: "0,5px",
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
    textTransform: "capitalize",
    padding: "11px 0 9px",
    width: "50%",
    position: "absolute",
    bottom: 20,
    left: "25%",
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.light,
    },
  },
});

export default useStyles;
