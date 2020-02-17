import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modalBox: {
    position: "fixed",
    top: "30%",
    left: "calc(50% - 20%)",
    minHeight: "20%",
    width: "25%",
    padding: theme.spacing(3),
    backgroundColor: "white",
    borderRadius: 4,
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
  closeBtn: {
    position: "absolute",
    top: "4%",
    right: "3%",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: theme.spacing(4),
  },
}));

export default useStyles;
