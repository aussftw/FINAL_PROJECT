import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";

const OrdersHistoryCardItem = ({ itemNo, title, price, img, qty }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.item} spacing={1}>
      <Grid item xs={4} sm={4} className={classes.imageGrid}>
        <Link to={`/products/${itemNo}`} className={classes.link}>
          <img className={classes.image} src={img} alt={title} />
        </Link>
      </Grid>
      <Grid item xs={5} sm={4} className={classes.titleGrid}>
        <Link to={`/products/${itemNo}`} className={classes.link}>
          <Typography className={classes.name}>{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={3} sm={4}>
        <Typography className={classes.price}>{`${qty} x $${price.toFixed(2)}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default OrdersHistoryCardItem;
