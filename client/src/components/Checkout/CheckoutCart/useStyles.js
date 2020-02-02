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
      margin: "0 15px 0 67px",
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
    display: "block",
    width: 123,
    margin: "10px auto",
    textDecoration: "none",
  },
  btn: {
    margin: "10px auto",
    fontSize: "14px",
  },
}));

export default useStyles;
