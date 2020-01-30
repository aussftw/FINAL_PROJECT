import React from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import v4 from "uuid";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./useStyles";
import CardAtMiniCart from "./CardAtMiniCart/CardAtMiniCart";

function numberWithCommas(x) {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const CartMini = ({ cart }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));
  const total =
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
  const totalWithComas = numberWithCommas(total);

  return (
    matches && (
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
                    itemNo={item.product.itemNo}
                    url={item.product.imageUrls[0]}
                    title={item.product.name}
                    qty={cartQty}
                    price={item.product.currentPrice}
                  />
                );
              })}
            </ul>
            <div className={classes.footer}>
              <Typography className={classes.total}>
                <Typography component="span" className={classes.subtotal}>Total: </Typography>
                <Typography component="span" className={classes.subtotal_price}>
                  {`$${totalWithComas}`}
                </Typography>
              </Typography>
              <Typography className={classes.mini_cart_buttons}>
                <Link to="/cart" className={classes.links}>
                  <Button variant="contained" className={classes.btn}>
                    VIEW CART
                  </Button>
                </Link>
                <Link to="/checkout" className={classes.links}>
                  <Button variant="contained" className={classes.btn}>
                    CHECKOUT
                  </Button>
                </Link>
              </Typography>
            </div>
          </div>
        ) : (
          <Typography className={classes.empty_mini_cart}>No products in the cart.</Typography>
        )}
      </Card>
    )
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    cart: state.cartReducer.cart,
  };
}

export default connect(mapStateToProps)(CartMini);
