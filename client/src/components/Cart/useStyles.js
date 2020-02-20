import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cartContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 90,
    marginBottom: 120,
    color: theme.palette.secondary.main,
    cursor: "default",
  },
  productHeaders: {
    height: 50,
    alignItems: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: "uppercase",
    color: theme.palette.secondary.dark,
    cursor: "default",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  totalBox: {
    width: 210,
    marginRight: 40,
  },
  totalSum: {
    display: "flex",
    justifyContent: "space-around",
  },
  checkoutButton: {
    marginTop: 20,
  },
  continueButton: {
    marginTop: 16,
  },
  emptyCartContinueButton: {
    width: 210,
  },
  links: {
    textDecoration: "none",
  },
}));

export default useStyles;
