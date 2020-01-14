import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    paddingLeft: theme.spacing(1),
    alignItems: "center",
    width: 400,
    boxShadow: "none",
    border: "1px solid grey",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  input: {
    fontSize: "0.8rem",
    flex: 3,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default useStyles;
