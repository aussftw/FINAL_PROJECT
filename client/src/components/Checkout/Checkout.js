import React, { useEffect, useState } from 'react';
import axios from "axios";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';
import CheckoutCart from './CheckoutCart/CheckoutCart';
import CheckoutOrder from './CheckoutOrder/CheckoutOrder';
import useStyles from './useStyles';


const Checkout = ({ userData, isAuthenticated, cartProducts }) => {
  const classes = useStyles();

  const [user, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    address: '',
  });

  useEffect(() => {
    if (userData.email !== undefined) {
      setUserData({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        telephone: userData.telephone,
        address: userData.address,
      });
    }
  }, [userData]);

  const newOrder = isAuthenticated ? {
    name: user.firstName,
    customerId: jwt(localStorage.getItem("authToken")).id,
    status: "In progress",
    email: user.email,
    mobile: user.telephone,
    deliveryAddress: JSON.stringify(user.address),
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml: `<h1>Your order is placed.</h1>`,
    canceled: false,
  } : {
    name: user.firstName,
    products: JSON.stringify(cartProducts),
    status: 'In progress',
    email: user.email,
    mobile: user.telephone,
    deliveryAddress: JSON.stringify(user.address),
    letterSubject: "Thank you for order! You are welcome!",
    letterHtml: `<h1>Your order is placed. Hi Max!</h1>`,
    canceled: false,
  };

  const handleSubmit = () => {
    axios
      .post("/api/orders" , newOrder)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      })
  };

  const handleChange = event => {
    setUserData({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Container className={classes.checkoutContainer} maxWidth="lg">
      <Typography variant="h3">Checkout</Typography>
      {cartProducts.length > 0 ? (
        <Grid container>
          <Grid item xs={12} md={6}>
            <CheckoutOrder
              isAuthenticated={isAuthenticated}
              user={user}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CheckoutCart />
          </Grid>
        </Grid>
      ) : (
        <div className={classes.messagesWrapper}>
          <Typography variant="h4" align="center" className={classes.mainMessage}>
            Your cart is empty !
          </Typography>
          <Typography className={classes.message} align="center">
            Please, add some products to your cart for checkout proceeding .
          </Typography>
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.loginReducer.user,
    isAuthenticated: state.loginReducer.isAuthenticated,
    cartProducts: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps, {})(Checkout);
