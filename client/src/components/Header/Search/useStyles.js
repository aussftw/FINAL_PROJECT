import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  // link: {
  //   display: "none",
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex",
  //   },
  //   color: theme.palette.secondary.main,
  //   textDecoration: "none",
  //   padding: 9,
  // },
  form: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  iconButton: {
    padding: 8,
    // backgroundColor: theme.palette.primary.main,
    // color: "white",
    // textDecoration: "none",
    "&$visited": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  input: {
    borderRadius: "none",
  },
  // divider: {
  //   height: 28,
  // },
}));

export default useStyles;
