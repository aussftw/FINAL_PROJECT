import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contactUsIcon: {
    marginRight: theme.spacing(1.5),
    color: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {},
  },
  contactUsItem: {
    fontSize: 16,
    [theme.breakpoints.up("sm")]: {
      marginTop: "-2rem",
    },
  },

  itemContainer: {
    margin: "1rem 0",
  },
  mainContainer: {
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up("sm")]: {
      margin: "1.5rem 1rem",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "start",
    paddingTop: "1rem",
    marginLeft: "-2rem",
  },
  logo: {
    height: 50,
    width: 170,
  },

  paymentMethods: {
    marginTop: "1.5rem",
    marginRight: "2.5rem",
  },
  paymentMethod: {
    marginRight: "1rem",
  },
}));

export default useStyles;
