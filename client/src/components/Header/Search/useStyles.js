import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    alignItems: "center",
    boxShadow: "none",
    border: "1px solid grey",
  },
  link: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: theme.palette.secondary.main,
    textDecoration: "none",
    padding: 9,
  },
  form: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  iconButton: {
    padding: 8,
  },
  // divider: {
  //   height: 28,
  // },
}));

export default useStyles;
