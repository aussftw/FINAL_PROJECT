import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  iconButton: {
    height: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  input: {
    borderRadius: "none",
  },
  helper: {
    display: "none"
  }
  // divider: {
  //   height: 28,
  // },
}));

export default useStyles;
