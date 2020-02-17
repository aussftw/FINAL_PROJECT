import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modalBox: {
    position: "fixed",
    top: 10,
    left: "calc(50% - 196px)",
    minHeight: 600,
    minWidth: 360,
    padding: theme.spacing(3),
    backgroundColor: "white",
    borderRadius: 4,
  },
  closeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  input: {
    display: "block",
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;