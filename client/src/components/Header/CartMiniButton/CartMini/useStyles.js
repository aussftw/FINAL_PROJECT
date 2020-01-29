import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    position: "absolute",
    maxHeight: "490px",
    top: 0,
    right: -45,
    width: 310,
    textAlign: "center",
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    borderRadius: 5,
    zIndex: 10,
    color: theme.palette.secondary.medium,
    boxShadow: "2px 2px 11px rgba(0,0,0,0.1)",
  },
  mini_cart_list: {
    listStyle: "none",
    margin: 0,
    maxHeight: "370px",
    overflow: "hidden",
    overflowY: "auto",
    padding: 10,
  },
  empty_mini_cart: {
    display: "flex",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 13,
  },
  footer: {
    height: 90,
  },
  total: {
    textAlign: "right",
    height: 15,
    borderTop: "1px solid",
    borderColor: theme.palette.secondary.light,
    margin: "0 5px 0 5px",
    padding: 15,
    fontSize: 14,
  },
  subtotal: {
    color: theme.palette.secondary.medium,
    fontWeight: 700,
  },
  subtotal_price: {
    color: theme.palette.secondary.dark,
    fontWeight: 700,
  },
  mini_cart_buttons: {
    height: 50,
    margin: "0 0 10px 0",
    textAlign: "right",
    padding: "0 15px",
  },
  links: {
    textDecoration: "none",
  },
  btn: {
    margin: "0 5px 0 5px",
  },
}));

export default useStyles;
