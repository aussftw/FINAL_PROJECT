import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 260,
      [theme.breakpoints.down("xs")]: {
        width: 178,
      },
    },
  },
  title: {
    padding: 5,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
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
    marginTop: 10,
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
