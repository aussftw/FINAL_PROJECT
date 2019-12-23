import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: theme.palette.primary.light,
  },
  textedFooter: {
    margin: 20,
    backgroundColor: theme.palette.primary.light,
  },
}));

export default useStyles;
