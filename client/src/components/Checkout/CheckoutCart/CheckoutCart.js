import React from "react";
import {connect} from "react-redux";
import v4 from "uuid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CheckoutCartCard from "./CheckoutCartCard/CheckoutCartCard";
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
      : "0,00";

  function numberWithCommas(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const totalWithComas = numberWithCommas(total);

  return (
    <div className={classes.root}>
      <Grid container className={classes.cartHeader}>
        <Grid item xs={4}>
          <Typography className={classes.title} align="left">
            Product
          </Typography>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Typography className={classes.title} align="right">
            Subtotal
          </Typography>
        </Grid>
      </Grid>
      {cart.map(item => {
        let cartQty = item.cartQuantity;
        if (item.product.quantity < cartQty) {
          cartQty = item.product.quantity;
        }
        return (
          <CheckoutCartCard
            key={v4()}
            price={item.product.currentPrice}
            cartQty={cartQty}
            itemNo={item.product.itemNo}
            title={item.product.name}
            img={item.product.imageUrls[0]}
          />
        )
      })}
      <Grid container className={classes.cartFooter}>
        <Grid item xs={4}>
          <Typography className={classes.title} align="left">
            Total
          </Typography>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Typography className={classes.title} align="right">
            {`$${totalWithComas}`}
          </Typography>
        </Grid>
      </Grid>
      <Link to="/cart" className={classes.links}>
        <Button variant="contained" className={classes.btn}>
          EDIT ORDER
        </Button>
      </Link>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
  };
}

export default  connect(mapStateToProps)(CheckoutCart);
