import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  border: {
    border: "1px solid black",
  },
  borderNoBottom: {
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
  },
  borderNoRight: {
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
  },
  bg: {
    backgroundColor: theme.palette.primary.light,
  },
  textedFooter: {
    margin: 20,
    // backgroundColor: '#F2F6E8',

    backgroundColor: theme.palette.primary.light,
  },
}));

export default useStyles;
