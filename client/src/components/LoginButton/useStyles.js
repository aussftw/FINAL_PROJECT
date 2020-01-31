import { makeStyles } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
  wrapper: {
    display: "inline-flex",
  },
  link: {
    marginRight: "20px",
    textDecoration: "none",
    color: "black",
  },
  icon: {
    fontSize: "24px",
  },
  span: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      marginRight: "15px",
      display: "inline-flex",
      alignItems: "center",
      cursor: "default",
    },
  },
});

export default useStyles;
