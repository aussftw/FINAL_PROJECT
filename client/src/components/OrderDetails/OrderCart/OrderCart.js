import React from "react";
import v4 from "uuid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderCartCard from "./OrderCartCard/OrderCartCard";
import useStyles from "./useStyles";

const OrderCart = ( { cart } ) => {
  const classes = useStyles();

  const total =
    cart.length > 0
      ? cart
        .reduce(function(sum, current) {
          return sum + current.product.currentPrice * current.cartQuantity;
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
    <Grid item xs={12} md={9} lg={8} className={classes.root}>
      <Grid container className={classes.cartHeader}>
        <Grid item xs={4}>
          <Typography className={classes.title} align="center">
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
        return (
          <OrderCartCard
            key={v4()}
            price={item.product.currentPrice}
            cartQty={item.cartQuantity}
            itemNo={item.product.itemNo}
            title={item.product.name}
            img={item.product.imageUrls[0]}
          />
        )
      })}
      <Grid container className={classes.cartFooter}>
        <Grid item xs={4}>
          <Typography className={classes.title} align="center">
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
    </Grid>
  )
};

export default OrderCart;
