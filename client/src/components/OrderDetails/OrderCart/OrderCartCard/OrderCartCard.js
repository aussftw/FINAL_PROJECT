import React from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const OrderCartCard = ({title, cartQty, price, itemNo, img}) => {
  const classes = useStyles();
  const subtotal = cartQty * price;

  return (
    <Grid container className={classes.item}>
      <Grid item xs={3} sm={3} className={classes.imageGrid}>
        <Link className={classes.link} to={`/products/${itemNo}`}>
          <img className={classes.image} src={img} alt={title} />
        </Link>
      </Grid>
      <Grid item xs={6} sm={6}>
        <Link className={classes.link} to={`/products/${itemNo}`}>
          <Typography className={classes.title}>{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={3} sm={3} className={classes.subtotal}>
        <Typography className={classes.quantity}>
          {`Quantity: ${cartQty}`}
        </Typography>
        <Typography className={classes.price}>
          {`$${subtotal.toFixed(2)}`}
        </Typography>
      </Grid>
    </Grid>
  )
};

export default OrderCartCard;
