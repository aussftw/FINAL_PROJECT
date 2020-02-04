import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  iconButton: {
    height: "40px",
    borderRadius: "0 4px 4px 0",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  input: {
    "& fieldset": {
      borderRadius: "4px 0 0 4px",
    },
  },
  // divider: {
  //   height: 28,
  // },
}));

export default useStyles;
