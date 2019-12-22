import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundColor: "#F2F6E8",
  },
  textedFooter: {
    margin: 20,
    // backgroundColor: '#F2F6E8',

    backgroundColor: theme.palette.primary.light,
  },
}));

export default useStyles;
