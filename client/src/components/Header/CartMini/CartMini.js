import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import v4 from "uuid";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import CardAtMiniCart from "../CardAtMiniCart/CardAtMiniCart";
import MainButton from "../../common/buttons/MainButton";

function numberWithCommas(x) {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const CartMini = ({ cart }) => {
  const classes = useStyles();
  const subTotal =
    cart.length > 0
      ? cart
          .reduce(function(sum, current) {
            let cartQty = current.cartQuantity;
            if (current.product.quantity < cartQty) {
              cartQty = current.product.quantity;
            }
            return sum + current.product.currentPrice * cartQty;
          }, 0)
          .toFixed(2)
      : 0;
  const subTotalWithComas = numberWithCommas(subTotal);

  return (
    <Card className={classes.card}>
      {cart.length > 0 ? (
        <div>
          <ul className={classes.mini_cart_list}>
            {cart.map(item => {
              let cartQty = item.cartQuantity;
              if (item.product.quantity < cartQty) {
                cartQty = item.product.quantity;
              }
              return (
                <CardAtMiniCart
                  key={v4()}
                  id={item.product._id}
                  url={item.product.imageUrls[0]}
                  title={item.product.name}
                  qty={cartQty}
                  price={item.product.currentPrice}
                />
              );
            })}
          </ul>
          <p className={classes.total}>
            <span className={classes.subtotal}>Subtotal: </span>
            <span className={classes.subtotal_price}>${subTotalWithComas}</span>
          </p>
          <p className={classes.mini_cart_buttons}>
            <Link to="/cart">
              <MainButton text="VIEW CART">VIEW CART</MainButton>
            </Link>
            <MainButton text="CHECKOUT">CHECKOUT</MainButton>
          </p>
        </div>
      ) : (
        <p className={classes.empty_mini_cart}>No products in the cart.</p>
      )}
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    cart: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps)(CartMini);
