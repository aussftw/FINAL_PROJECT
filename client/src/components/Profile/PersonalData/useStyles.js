import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 260,
      [theme.breakpoints.down("xs")]: {
        width: 180,
      },
    },
  },
  title: {
    margin: "0px 0px 5px 0",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    fontWeight: 400,
  },
  btn: {
    width: 160,
    fontSize: "12px",
    letterSpacing: "0,5px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: "5px",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  message: {
    marginTop: 5,
    textAlign: "center",
  },
}));

export default useStyles;
