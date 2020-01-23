import React, { useState, useEffect, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import {
  addItemCart,
  decreaseItemCart,
  deleteItemCart,
  changeItemCartQuantity,
} from "../../../store/actions/сart";

import useStyles from "./useStyles";

// eslint-disable-next-line no-shadow
const ProductCart = ({
  id,
  itemNo,
  title,
  price,
  img,
  cartQty,
  shopQty,
  decreaseItemCart,
  deleteItemCart,
  changeItemCartQuantity,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const [subtotal, setSubtotal] = useState(cartQty * price);
  const [cartQtyInput, setCartQtyInput] = useState(cartQty);
  const qId = `quantity-input-${id}`;

  const calculatePrice = useCallback(() => {
    setSubtotal(Math.round(cartQty * price * 100) / 100);
  }, [cartQty, price]);

  const changeCartProductQuantity = event => {
    if (event.target.value >= shopQty) {
      setCartQtyInput(shopQty);
      changeItemCartQuantity(id, shopQty);
    } else if (event.target.value < 0) {
      changeItemCartQuantity(id, 0);
    } else if (event.target.value === "") {
      changeItemCartQuantity(id, 1);
    } else {
      changeItemCartQuantity(id, event.target.value);
    }
  };

  const cartQtyInputHandler = event => {
    setCartQtyInput(event.target.value);
  };

  const increaseCartProductQuantity = () => {
    if (cartQty < shopQty) {
      addItemCart(id, itemNo);
    }
  };

  const decreaseCartProductQuantity = () => {
    decreaseItemCart(id);
  };

  const deleteCartProduct = () => {
    deleteItemCart(id);
  };

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  useEffect(() => {
    setCartQtyInput(cartQty);
  }, [cartQty]);

  return (
    <Grid container className={classes.item} spacing={1}>
      <Grid item xs={3} sm={2} className={classes.imageGrid}>
        <img className={classes.image} src={img} alt={title} />
      </Grid>
      <Grid item xs={5} sm={4} className={classes.titleGrid}>
        <Typography className={classes.title}>
          {title
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Typography>
      </Grid>
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>
          {matches && "Price: "}${price.toFixed(2)}
        </Typography>
      </Grid>
      {matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton aria-label="delete" onClick={deleteCartProduct}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      {matches && <Grid item xs={3} />}
      <Grid item xs={5} sm={3} className={classes.quantityGrid}>
        <Tooltip title="decrease">
          <IconButton
            aria-label="decrease"
            onClick={decreaseCartProductQuantity}
          >
            <RemoveIcon />
          </IconButton>
        </Tooltip>
        <input
          className={classes.quantityNumber}
          id={qId}
          name="quantity"
          type="number"
          value={cartQtyInput}
          onChange={cartQtyInputHandler}
          onBlur={changeCartProductQuantity}
        />
        <Tooltip title="increase">
          <IconButton
            aria-label="increase"
            onClick={increaseCartProductQuantity}
          >
            <AddIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>
          {matches && "Subtotal: "}${subtotal}
        </Typography>
      </Grid>
      {!matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton aria-label="delete" onClick={deleteCartProduct}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      {matches && <Grid item xs={1} />}
    </Grid>
  );
};

export default connect(null, {
  addItemCart,
  decreaseItemCart,
  deleteItemCart,
  changeItemCartQuantity,
})(ProductCart);
