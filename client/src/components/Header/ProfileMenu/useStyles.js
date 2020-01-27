import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
  },
  icon: {
    color: theme.palette.secondary.dark,
  },
  paper: {
    zIndex: 11,
  },
  list: {
    outline: "none",
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