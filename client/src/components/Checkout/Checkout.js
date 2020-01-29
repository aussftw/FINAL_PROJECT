import React, { useEffect, useState } from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CheckoutCart from "./CheckoutCart/CheckoutCart";
import CheckoutOrder from './CheckoutOrder/CheckoutOrder';
import useStyles from  "./useStyles";
import { connect } from 'react-redux';


const Checkout = ({userData , isAuthenticated}) => {
  const classes = useStyles();

  const [user, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
  });

  useEffect(()=>{
    if (userData.email !== undefined){setUserData({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      telephone: userData.telephone,
      address: userData.address,
    });}
  },[userData]);

  const handleChange = event => {
    setUserData({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Container className={classes.checkoutContainer} maxWidth="lg">
      <Typography variant="h3">Checkout</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CheckoutOrder
            isAuthenticated={isAuthenticated}
            user={user}
            handleChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CheckoutCart />
        </Grid>
      </Grid>
    </Container>
  )
};

const mapStateToProps = state => {
  return {
    userData: state.loginReducer.user,
    isAuthenticated: state.loginReducer.isAuthenticated,
  }
};

export default connect(mapStateToProps, {

})(Checkout);
