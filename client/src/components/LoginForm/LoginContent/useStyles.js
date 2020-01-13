import makeStyles from "@material-ui/core/styles/makeStyles";
import theme from "../../../theme";

const useStyles = makeStyles({
  textField: {
    width: "90%",
    marginBottom: "20px",
  },
  title: {
    margin: "10px 0 30px 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  wrapper: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    marginTop: "0",
    fontSize: "20px",
  },
  btn: {
    letterSpacing: "2px",
    margin: "10px 0",
    padding: "8px 100px",
    color: "white",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    minWidth: "40vw",
  },
  icon: {
    colors: theme.palette.primary.main,
  },
});

export default useStyles;
