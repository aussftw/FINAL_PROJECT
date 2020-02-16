import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modalBox: {
    position: "fixed",
    top: "30%",
    left: "calc(50% - 20%)",
    minHeight: "20%",
    width: "20%",
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
  message: {
    padding: theme.spacing(4),
  },
}));

export default useStyles;
