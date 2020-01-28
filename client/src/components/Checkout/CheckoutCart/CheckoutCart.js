import React from "react";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const CheckoutCart = ( {cart} ) => {
  const classes = useStyles();

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

  function numberWithCommas(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const totalWithComas = numberWithCommas(total);

  return (
    <div>
      <Grid container className={classes.cartHeader}>
        <Grid item xs={4}>
          <Typography className={classes.title} align="left">
            Product
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title} align="center">
            Quantity
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.title} align="right">
            Subtotal
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.cartFooter}>
        <Grid item xs={6}>
          <Typography className={classes.title} align="left">
            Total
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.title} align="right">
            {`$${totalWithComas}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    error: state.cartReducer.error,
  };
}

export default  connect(mapStateToProps)(CheckoutCart);
