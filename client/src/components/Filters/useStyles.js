import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    maxWidth: 360,
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  divider: {
    color: theme.palette.primary.dark,
    height: 3,
    width: "50%",
    marginLeft: 15,
  },
}));

export default useStyles;
