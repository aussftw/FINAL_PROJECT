import { makeStyles } from "@material-ui/core";
import theme from "../../theme";

const useStyles = makeStyles({
  wrapper: {
    display: "inline-flex",
  },
  // btn: {
  //   fontSize: "14px",
  //   letterSpacing: "0,5px",
  //   color: "white",
  //   backgroundColor: theme.palette.primary.main,
  //   padding: "5px",
  //   "&:hover": {
  //     color: "white",
  //     backgroundColor: theme.palette.primary.dark,
  //   },
  // },
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
