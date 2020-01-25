import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: "85%",
    textAlign: "center",
    margin: "3rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "4rem auto",
    },
  },
  message: {
    marginTop: "1rem",
    display: "inherit",
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));

export default useStyles;
