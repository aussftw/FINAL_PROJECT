import React, { useEffect, useState } from "react";
import axios from "axios";
import v4 from "uuid";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import OrdersHistoryCard from "./OrdersHistoryCard/OrdersHistoryCard";
import PreloaderAdaptive from "../../Preloader/Adaptive";
import useStyles from "./useStyles";

const OrdersHistory = () => {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      const {CancelToken} = axios;
      const source = CancelToken.source();
      axios
        .get("/api/orders", { cancelToken: source.token })
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

      return () => {
        source.cancel();
      };
    }, []);

    return ( isLoading ? (
      <PreloaderAdaptive />
      ) : (
        <Container className={classes.ordersContainer} maxWidth="lg">
          <Typography className={classes.title} variant="h3">Orders history</Typography>
          {orders.length > 0 ? (
            <div className={classes.root}>
              {orders.reverse().map(item => {
            return (
              <OrdersHistoryCard
                key={v4()}
                orderNo={item.orderNo}
                date={item.date.slice(0, 10)}
                name={item.customerId.firstName}
                lastName={item.customerId.lastName}
                phone={item.mobile}
                email={item.email}
                address={item.deliveryAddress}
                status={item.status}
                canceled={item.canceled}
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

export default OrdersHistory;
