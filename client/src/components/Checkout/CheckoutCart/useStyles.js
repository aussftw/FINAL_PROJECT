import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 10px 20px 10px"
  },
  cartHeader: {
    height: 56,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
    margin: "0 15px 0 15px",
    [theme.breakpoints.up("sm")]: {
      margin: "0 30px 0 50px",
    },
  },
  cartFooter: {
    height: 56,
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
    fontSize: "14px",
  },
}));

export default useStyles;
