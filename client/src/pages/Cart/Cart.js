import React, { useEffect } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import Preloader from "../../components/Preloader/Desktop";
import ProductCart from "../../components/common/ProductCart/ProductCart";
import { getCart } from "../../store/actions/Cart";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";

// eslint-disable-next-line no-unused-vars,no-shadow
const Cart = ({ cart, error, getCart }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <Container className={classes.cartContainer} maxWidth="lg">
        <Typography className={classes.cartTitle}>Cart</Typography>

        {!matches && (
          <Grid container spacing={1} className={classes.productHeaders}>
            <Grid item xs={2} />
            <Grid item sm={4}>
              <Typography className={classes.title} align="left">
                Product
              </Typography>
            </Grid>
            <Grid item sm={1}>
              <Typography className={classes.title} align="right">
                Price
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography className={classes.title} align="center">
                Quantity
              </Typography>
            </Grid>
            <Grid item sm={1}>
              <Typography className={classes.title} align="right">
                Subtotal
              </Typography>
            </Grid>
          </Grid>
        )}
        {!cart ? (
          <Preloader />
        ) : (
          cart.map(value => {
            let cartQty = value.cartQuantity;
            if (value.product.quantity < cartQty) {
              cartQty = value.product.quantity;
            }
            return (
              <ProductCart
                /* eslint-disable-next-line no-underscore-dangle */
                id={value.product._id}
                /* eslint-disable-next-line no-underscore-dangle */
                key={`cart-key-${value.product._id}`}
                itemNo={value.product.itemNo}
                title={value.product.name}
                rate={value.product.rate.rating}
                price={value.product.currentPrice}
                img={value.product.imageUrls[0]}
                cartQty={cartQty}
                shopQty={value.product.quantity}
              />
            );
          })
        )}
        <Box className={classes.totalContainer}>
          <Box className={classes.totalBox}>
            <Box className={classes.totalSum}>
              <Typography className={classes.title} component="span">
                Total
              </Typography>
              <Typography className={classes.title} component="span">
                $1000
              </Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              className={classes.checkoutButton}
            >
              proceed to checkout
            </Button>
            <Button
              variant="text"
              fullWidth
              color="secondary"
              className={classes.continueButton}
            >
              continue shopping
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    error: state.cartReducer.error,
  };
}

export default connect(mapStateToProps, { getCart })(Cart);
