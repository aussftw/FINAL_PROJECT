import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contactUsIcon: {
    marginRight: theme.spacing(1.5),
    color: theme.palette.secondary.main,
  },
  contactUsItem: {
    fontSize: 16,
    color: theme.palette.secondary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  itemContainer: {
    display: "flex",
    margin: "1rem 0",
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("sm")]: {
      // margin: "0 1rem",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "start",
    paddingTop: "1rem",
    marginLeft: "-2rem",
  },
  containerTittle: {
    fontWeight: 500,
    fontSize: 18,
  },
  logo: {
    height: 50,
    width: 170,
  },

  paymentMethods: {
    marginTop: "1.5rem",
    // marginRight: "2.5rem",
  },
  paymentMethod: {
    marginRight: 12,
  },
}));

export default useStyles;
