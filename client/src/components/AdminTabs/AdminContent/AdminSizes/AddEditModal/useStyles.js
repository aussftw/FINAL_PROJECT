import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modalBox: {
    position: "fixed",
    top: "10%",
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
    top: "2%",
    right: "4%",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    margin: theme.spacing(1),
  },
  btn: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;