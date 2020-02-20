import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

const AdminOrdersProducts = ({ rowData, totalSum }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper}>
      {rowData.map(item => {
        const ProdName = item.product.name;

        return (
          <Grid container key={ProdName}>
            <Grid item xs={4} sm={4}>
              <Typography
                component={Link}
                to={`/products/${item.product.itemNo}`}
                className={classes.name}
              >
                {ProdName.charAt(0).toUpperCase() + ProdName.slice(1)}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3}>
              {item.product.imageUrls.map(url => {
                return (
                  <img
                    key={url}
                    alt={ProdName}
                    src={url}
                    style={{ width: "20%" }}
                  />
                );
              })}
            </Grid>
            <Grid item xs={2} sm={2}>
              <Typography>
                {item.product.currentPrice}$ x{item.cartQuantity} =
                {item.cartQuantity * item.product.currentPrice} $
              </Typography>
            </Grid>
          </Grid>
        );
      })}
      <Typography>Total = {totalSum}</Typography>
    </Grid>
  );
};

export default AdminOrdersProducts;
