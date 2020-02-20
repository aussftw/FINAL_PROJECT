import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    border: "1px solid #c7c7c7",
    borderRadius: "4px",
  },
  input: {},
  btn: {
    marginTop: theme.spacing(1),
  },
  hintLine: {
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
