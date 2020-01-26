import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import v4 from "uuid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
// import jwt from "jwt-decode";

import OrdersHistoryCard from "./OrdersHistoryCard/OrdersHistoryCard";
import PreloaderAdaptive from "../../Preloader/Adaptive";
import useStyles from "./useStyles";

const OrdersHistory = () =>
  // {cart, user}
  {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    // const token = localStorage.getItem("authToken");
    // console.log(jwt(token).id);

    const [orders, setOrders] = useState([]);

    // const newOrder = {
    //   customerId: jwt(token).id,
    //   status: "not shipped",
    //   email: user.email,
    //   mobile: user.telephone,
    //   letterSubject: "Thank you for order! You are welcome!",
    //   letterHtml: "<h1>Your order is placed. OrderNo is 023689452.</h1>",
    //   canceled: false,
    // };
    // console.log(newOrder);

    // function createOrder() {
    //   axios
    //     .post("/api/orders", newOrder)
    //     .then(newOrder => {
    //       console.log(newOrder);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    //
    // createOrder();

    useEffect(() => {
      setIsLoading(true);
      axios
        .get("/api/orders")
        .then(ordered => {
          setIsLoading(false);
          if (!ordered) {
            return;
          }
          setOrders(ordered.data);
        })
        .catch(error => {
          setIsLoading(false);
          setMessage(`Error: ${error.message}`);
        });
    }, []);

    return ( isLoading ? (
      <PreloaderAdaptive />
      ) : (
        <Container className={classes.ordersContainer} maxWidth="lg">
          <Typography className={classes.title} variant="h3">Orders history</Typography>
          {orders.length > 0 ? (
            <div className={classes.root}>
              {orders.map(item => {
            return (
              <OrdersHistoryCard
                key={v4()}
                orderNo={item.orderNo}
                date={item.date.slice(0, 10)}
                status={item.status}
                totalSum={item.totalSum}
                products={item.products}
              />
            );
          })}
            </div>
          ) : (
            <Typography className={classes.message}>You do not have orders</Typography>
          )}
          {Boolean(message) && <Typography className={classes.message}>{message}</Typography>}
        </Container>
    ));
  };

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps)(OrdersHistory);
