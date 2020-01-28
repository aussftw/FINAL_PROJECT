import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mobileSearch: {
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  popperSearch: {
    backgroundColor: "white",
    marginTop: "2%",
  },
}));

export default useStyles;
