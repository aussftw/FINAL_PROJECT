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
    width: 250,
    [theme.breakpoints.up("md")]: {
      marginRight: "15px",
      display: "inline-flex",
      justifyContent: "flex-end",
      alignItems: "center",
      cursor: "default",
    },
  },
  btn: {
    marginRight: 24,
  },
});

export default useStyles;
