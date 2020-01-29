import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckoutCart from "./CheckoutCart/CheckoutCart";
import useStyles from  "./useStyles";


const Checkout = () => {
  const classes = useStyles();

  return (
    <Container className={classes.checkoutContainer} maxWidth="lg">
      <Typography variant="h3">Checkout</Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          Form
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutCart />
        </Grid>
      </Grid>
    </Container>
  )
};

export default Checkout;
