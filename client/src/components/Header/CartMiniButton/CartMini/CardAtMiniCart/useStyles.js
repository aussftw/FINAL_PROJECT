import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  mini_cart_card: {
    display: "flex",
    width: 273,
    margin: "0 0 10px",
    listStyle: "none",
    justifyContent: "space-between",
    textAlign: "left",
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.secondary.light,
    paddingBottom: 10,
    "&:last-child": {
      borderBottom: 0,
      paddingBottom: 0,
    },
  },
  mini_cart_card_link: {
    color: theme.palette.secondary.medium,
    textDecoration: "none",
    display: "flex",
    fontSize: 14,
  },
  mini_cart_card_img_wrapper: {
    display: "flex",
    justifyContent: "center",
    width: 88,
    height: 77,
    marginRight: 10,
  },
  mini_cart_card_img: {
    height: 77,
  },
  mini_cart_card_title: {
    width: 152,
    textTransform: "capitalize",
    lineHeight: 1.5,
    color: theme.palette.secondary.medium,
    fontSize: 14,
    margin: 0,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  mini_cart_card_quantity: {
    fontSize: 14,
  },
  mini_cart_card_price: {
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.secondary.dark,
  },
  mini_cart_card_close: {
    cursor: "pointer",
  },
}));

export default useStyles;
