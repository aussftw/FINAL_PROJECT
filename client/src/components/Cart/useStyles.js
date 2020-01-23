import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cartContainer: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 30,
    textTransform: "uppercase",
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
  },
  totalContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 30,
  },
  totalBox: {
    width: 200,
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
    marginTop: 20,
  },
}));

export default useStyles;
