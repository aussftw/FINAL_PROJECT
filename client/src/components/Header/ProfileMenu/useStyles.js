import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-flex",
  },
  icon: {
    color: theme.palette.secondary.dark,
  },
  text: {
    color: theme.palette.secondary.dark,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
}));

export default useStyles;