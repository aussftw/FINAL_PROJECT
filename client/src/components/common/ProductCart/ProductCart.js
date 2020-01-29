import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import {
  addItemCart,
  decreaseItemCart,
  deleteItemCart,
  changeItemCartQuantity,
} from "../../../store/actions/сart";

import useStyles from "./useStyles";

const ProductCart = ({
  id,
  itemNo,
  title,
  price,
  img,
  cartQty,
  shopQty,
  addItemCartVar,
  decreaseItemCartVar,
  deleteItemCartVar,
  changeItemCartQuantityVar,
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
      changeItemCartQuantityVar(id, shopQty);
    } else if (event.target.value === "" || event.target.value <= 0) {
      changeItemCartQuantityVar(id, 1);
    } else {
      changeItemCartQuantityVar(id, +event.target.value);
    }
  };

  const cartQtyInputHandler = event => {
    if (event.target.value <= 0) {
      setCartQtyInput(1);
    } else {
      setCartQtyInput(event.target.value);
    }
  };

  const increaseCartProductQuantity = () => {
    if (cartQty < shopQty) {
      addItemCartVar(id, itemNo);
    }
  };

  const decreaseCartProductQuantity = () => {
    if (cartQty !== 1) {
      decreaseItemCartVar(id);
    }
  };

  const deleteCartProduct = () => {
    deleteItemCartVar(id);
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
        <Link className={classes.link} to={`/products/${itemNo}`}>
          <Typography className={classes.title}>{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>
          {matches && "Price: "}
$
          {price.toFixed(2)}
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
      {shopQty > 0 ? (
        <Grid item xs={5} sm={3} className={classes.quantityGrid}>
          {cartQty > 1 ? (
            <Tooltip title="decrease">
              <IconButton
                aria-label="decrease"
                onClick={decreaseCartProductQuantity}
              >
                <RemoveIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Box style={{cursor: "not-allowed", borderRadius: "50%"}}>
              <IconButton disabled>
                <RemoveIcon />
              </IconButton>
            </Box>
          )}

          <input
            className={classes.quantityNumber}
            id={qId}
            name="quantity"
            type="number"
            value={cartQtyInput}
            onChange={cartQtyInputHandler}
            onBlur={changeCartProductQuantity}
          />
          {cartQty < shopQty ? (
            <Tooltip title="increase">
              <IconButton
                aria-label="increase"
                onClick={increaseCartProductQuantity}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Box style={{cursor: "not-allowed", borderRadius: "50%"}}>
              <IconButton disabled>
                <AddIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
      ) : (
        <Grid item xs={5} sm={3} className={classes.quantityGrid}>
          <Typography className={classes.outOfStock}>Out of stock</Typography>
        </Grid>
      )}
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>
          {matches && "Subtotal: "}
$
          {subtotal.toFixed(2)}
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
  addItemCartVar: addItemCart,
  decreaseItemCartVar: decreaseItemCart,
  deleteItemCartVar: deleteItemCart,
  changeItemCartQuantityVar: changeItemCartQuantity,
})(ProductCart);
