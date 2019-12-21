import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    position: "absolute",
    maxHeight: "85vh",
    top: 70,
    right: 0,
    width: 310,
    textAlign: "center",
    border: "1px solid #ededed",
    borderRadius: 5,
    zIndex: 10,
    color: "#707070",
    boxShadow: "2px 2px 11px rgba(0,0,0,0.1)",
    // transition: "height 3000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  mini_cart_list: {
    listStyle: "none",
    margin: 0,
    maxHeight: "65vh",
    overflow: "hidden",
    overflowY: "auto",
    padding: 10,
  },
  empty_mini_cart: {
    display: "flex",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    // color: "#707070",
    fontSize: 13,
  },
  total: {
    textAlign: "right",
    height: 15,
    borderTop: "1px solid #ededed",
    margin: 0,
    padding: 15,
    fontSize: 13,
  },
  subtotal: {
    fontWeight: 700,
  },
  subtotal_price: {
    color: "#000000",
    fontWeight: 500,
  },
  mini_cart_buttons: {
    height: 50,
    margin: "0 0 10px 0",
    textAlign: "right",
    padding: "0 15px",
  },
});

export default useStyles;
