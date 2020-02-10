import React, { useCallback, useEffect, useState } from "react";
import {Link, useHistory} from "react-router-dom";
import { connect } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import useStyles from "./useStyles";
import Preloader from "../Preloader";
import ProductCart from "../common/ProductCart/ProductCart";
import { getCart } from "../../store/actions/сart";

const Cart = ({ cart, getCartVar }) => {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [allProducts, setAllProducts] = useState([]);

  const calcTotalPrice = useCallback(() => {
    const result = cart.reduce((sum, item) => {
      if (item.product.quantity < 1) {
        return sum
      }
      return sum + item.product.currentPrice * item.cartQuantity;
    }, 0);
    setTotalPrice(Math.round(result * 100) / 100);
  }, [cart]);

  const renderProducts = useCallback(() => {
    const value = cart.map(value => {
      let cartQty = value.cartQuantity;
      if (value.product.quantity < cartQty) {
        cartQty = value.product.quantity;
      }
      return (
        <ProductCart
          id={value.product._id}
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
    });
    setAllProducts(value)
  }, [cart]);

  useEffect(() => {
    getCartVar();
  }, [getCartVar]);

  useEffect(() => {
    calcTotalPrice();
  }, [calcTotalPrice]);

  useEffect(()=> {
    if (cart) {
    renderProducts();
  }
  }, [cart, renderProducts]);

  return (
    <Container className={classes.cartContainer} maxWidth="lg">
      <Typography variant="h3" style={{cursor: "default"}}>Cart</Typography>
      {cart.length === 0 && (
        <Typography className={classes.emptyCart}>
          Your cart is empty
        </Typography>
      )}
      {!matches &&
        cart.length !== 0 && (
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
          allProducts
      )}
      {cart.length !== 0 ? (
        <Box className={classes.totalContainer}>
          <Box className={classes.totalBox}>
            <Box className={classes.totalSum}>
              <Typography className={classes.title} component="span">
                Total
              </Typography>
              <Typography className={classes.title} component="span">
                $
                {totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Link to="/checkout" className={classes.links}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.checkoutButton}
              >
              proceed to checkout
              </Button>
            </Link>
            <Button
              variant="text"
              fullWidth
              className={classes.continueButton}
              onClick={history.goBack}
            >
              continue shopping
            </Button>
          </Box>
        </Box>
      ) : (
        <Box className={classes.totalContainer}>
          <Button
            variant="outlined"
            className={classes.emptyCartContinueButton}
            onClick={history.goBack}
          >
            continue shopping
          </Button>
        </Box>
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    error: state.cartReducer.error,
  };
}

export default connect(mapStateToProps, { getCartVar: getCart })(Cart);
