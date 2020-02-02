import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  // Box,
  // Link,
  // Button,
  // IconButton,
  // List,
  // ListItem,
  // ListItemText,
} from "@material-ui/core";

import PreloaderAdaptive from "../Preloader/Adaptive";
import useStyles from "./useStyles";

const OrderDaetails = () => {
  const classes = useStyles();
  const order = useParams();
  const [ orderDetails, setOrderDetails ] =  useState({
    name: "",
    status: "",
    email: "",
    mobile: "",
    deliveryAddress: "",
    products: [],
  });
  const [preloader, setPreloader] = useState(false);
  console.log(order.orderNo);
  useEffect(() => {
    setPreloader(true);
    axios
      .get(`/api/orders/${order.orderNo}`)
      .then( order => {
        console.log(order);
        setPreloader(false);
        setOrderDetails(order.data);
      })
      .catch(error => {
        console.log(error.response);
        setPreloader(false);
      })
  },[order.orderNo]);



  return (preloader ? (
    <PreloaderAdaptive />
    ) : (
      <Container className={classes.orderDetailsContainer} maxWidth="lg">
        <Typography variant="h3">Order details</Typography>
        <Typography>
          {`Hi ${orderDetails.name}, your order №${orderDetails.orderNo} has been successfully placed at Plantly Shop. Order details are below.`}
        </Typography>
      </Container>
    )
  )
};

export default OrderDaetails;
