import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mini_cart_card: {
    display: "flex",
    margin: "0 0 10px",
    listStyle: "none",
    justifyContent: "space-between",
    textAlign: "left",
    borderBottom: "1px solid #e4e4e4",
    paddingBottom: 10,
    "&:last-child": {
      borderBottom: 0,
      paddingBottom: 0,
    },
  },
  mini_cart_card_link: {
    color: "#707070",
    textDecoration: "none",
    display: "flex",
    fontSize: 14,
  },
  mini_cart_card_img: {
    width: 88,
    height: 77,
    marginRight: 10,
  },
  mini_cart_card_title: {
    textTransform: "capitalize",
    lineHeight: 1.5,
    color: "#707070",
    fontSize: 14,
    margin: 0,
    "&:hover": {
      color: "#6ea820",
    },
  },
  mini_cart_card_price: {
    fontWeight: 600,
    color: "#000000",
  },
  mini_cart_card_close: {
    cursor: "pointer",
  },
});

export default useStyles;
