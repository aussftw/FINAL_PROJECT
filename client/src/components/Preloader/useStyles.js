import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  adaptive_preloader: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
