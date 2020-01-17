import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useStyles from "./useStyles";
import Preloader from "../../components/Preloader/Desktop";
import ProductCart from "../../components/common/ProductCart/ProductCart";

const Cart = () => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const [products, setProducts] = useState(null);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDIyNjI1OTA2ZGZjMTllMDk1NTA4NyIsImZpcnN0TmFtZSI6IkFsZXhhbmRyIiwibGFzdE5hbWUiOiJTdWdhayIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3OTI1ODE3MCwiZXhwIjoxNTc5Mjk0MTcwfQ.sjJVqYyd_7024R7MFAQoU0-KKibghjTpo7lL4e8zZdI";
  // eslint-disable-next-line no-undef
  localStorage.setItem("authToken", authToken);

  const getToken = () => {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
    return token;
  };

  const deleteItemFromCart = id => {
    const newProducts = products;
    newProducts.splice(id, 1);
    setProducts(newProducts);
    console.log(products);
  };

  useEffect(() => {
    getToken();

    axios
      .get("/cart")
      .then(response => {
        setProducts(response.data.products);
        // eslint-disable-next-line no-console
        console.log(response.data.products);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
      });
  }, []);

  return (
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
      {!products ? (
        <Preloader />
      ) : (
        products.map((value, index) => {
          return (
            <ProductCart
              /* eslint-disable-next-line no-underscore-dangle */
              id={value.product._id}
              /* eslint-disable-next-line no-underscore-dangle */
              key={`cart-key-${value.product._id}`}
              itemIndex={index}
              title={value.product.name}
              rate={value.product.rate.rating}
              price={value.product.currentPrice}
              img={value.product.imageUrls[0]}
              cartQty={value.cartQuantity}
              shopQty={value.product.quantity}
              deleteItem={deleteItemFromCart}
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
  );
};

export default Cart;
