import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  iconButton: {
    height: "40px",
    borderRadius: "0 4px 4px 0",
  },
  input: {
    "& fieldset": {
      borderRadius: "4px 0 0 4px",
    },
  },
  helper: {
    display: "none"
  },
  // divider: {
  //   height: 28,
  // },
});

export default useStyles;
