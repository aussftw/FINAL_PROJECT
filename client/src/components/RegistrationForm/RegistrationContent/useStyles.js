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
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width:"50vw",
    margin:"0 auto",
  },
  text: {
    marginTop: 0,
    fontSize: "20px",
  },
  btn: {
    letterSpacing: "2px",
    margin: "20px 0",
    padding: "13px 100px",
    color: "white",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    maxWidth: "100vw",
    height:"99vh",
    // overflowX : 'auto',
    [theme.breakpoints.down("lg")]:{
      maxWidth: "75vw",
    },
    [theme.breakpoints.down("xs")]:{
      maxWidth: "90vw",
    },
  },
  errText: {
    fontSize: "24px",
    color: "red",
  },
});

export default useStyles;
