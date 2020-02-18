import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import jwt from "jwt-decode";
import { Redirect } from  "react-router-dom";
import {Button} from "@material-ui/core";
import {ValidatorForm} from "react-material-ui-form-validator";
import CheckoutCart from "./CheckoutCart/CheckoutCart";
import CheckoutOrder from "./CheckoutOrder/CheckoutOrder";
import PreloaderAdaptiveSmall from "../Preloader/AdaptiveSmall";
import useStyles from "./useStyles";


const Checkout = ({ userData, isAuthenticated, cartProducts }) => {
  const classes = useStyles();

  const [user, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
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
    letterSubject: "Congratulations! You’re now a part of the Plantly Shop family.",
    letterHtml: "Our product is so much more than the packaging.",
    canceled: false,
  } : {
    name: user.firstName,
    products: JSON.stringify(cartProducts),
    status: "In progress",
    email: user.email,
    mobile: user.telephone,
    deliveryAddress: JSON.stringify(user.address),
    letterSubject: "Congratulations! You’re now a part of the Plantly Shop family.",
    letterHtml: "Our product is so much more than the packaging.",
    canceled: false,
  };

  const [link, setLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {CancelToken} = axios;
  const source = CancelToken.source();

  const handleSubmit = () => {
    setIsLoading(true);
    const {CancelToken} = axios;
    const source = CancelToken.source();
    axios
      .post("/api/orders" , newOrder, { cancelToken: source.token })
      .then(response => {
        setLink(response.data.order.orderNo);
      })
      .catch(error => {
        setIsLoading(false);
        setMessage(error.message);
      });
  };

  useEffect(() => {
    return () => {
      source.cancel();
    };
  });

  const handleChange = event => {
    setUserData({ ...user, [event.target.name]: event.target.value });
  };

  return (
    link ? (<Redirect to={`/orders/${link}`} />) : (
      <Container className={classes.checkoutContainer} maxWidth="lg">
        <Typography variant="h3">Checkout</Typography>
        {cartProducts.length ? (
          <ValidatorForm
            noValidate={false}
            autoComplete="off"
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <CheckoutOrder
                  isAuthenticated={isAuthenticated}
                  user={user}
                  handleChange={handleChange}
                  isLoading={isLoading}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CheckoutCart />
              </Grid>
              {isLoading ? <PreloaderAdaptiveSmall /> : <Button className={classes.submitBtn} type="submit">place order</Button>}
            </Grid>
            {Boolean(message) && <Typography className={classes.errorMessage}>{message}</Typography>}
          </ValidatorForm>
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
    )
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
