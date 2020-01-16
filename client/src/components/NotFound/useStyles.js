import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    display: "inline-block",
    margin: "5rem auto",
    [theme.breakpoints.up("md")]: {
      margin: "8rem auto",
    },
    padding: "0 1rem",
  },
  title: {
    fontWeight: 500,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  message: {
    marginTop: "1rem",
  },
}));

export default useStyles;
