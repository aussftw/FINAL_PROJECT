import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  cartHeader: {
    height: 50,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
    margin: "0 10px 0 10px",
    [theme.breakpoints.up("sm")]: {
      margin: "0 5px 0 5px",
    },
  },
  cartFooter: {
    height: 50,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    borderTop: "none",
  },
  links: {
    textDecoration: "none",
  },
  btn: {
    marginTop: 10,
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
}));

export default useStyles;
