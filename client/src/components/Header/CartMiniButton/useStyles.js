import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline",
  },
  icon: {
    color: theme.palette.secondary.dark,
  },
  paper: {
    zIndex: 10,
  },
}));

export default useStyles;