import React, { useState, useEffect, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import useStyles from "./useStyles";

const ProductCart = ({
  id,
  itemIndex,
  title,
  price,
  img,
  cartQty,
  shopQty,
  deleteItem,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const [cartQuantity, setCartQuantity] = useState(cartQty);
  const [subtotal, setSubtotal] = useState(cartQty * price);
  const qId = `quantity-${id}`;

  const calculatePrice = useCallback(() => {
    setSubtotal(Math.round(cartQuantity * price * 100) / 100);
  }, [cartQuantity, price]);

  const changeCartProductQuantity = event => {
    if (event.target.value > shopQty) {
      setCartQuantity(shopQty);
    } else if (event.target.value < 0) {
      setCartQuantity(0);
    } else if (event.target.value === "") {
      setCartQuantity(1);
    } else {
      setCartQuantity(event.target.value);
    }
  };

  const decreaseCartProductQuantity = () => {
    if (cartQuantity > 0) {
      setCartQuantity(+cartQuantity - 1);
    }
  };
  const increaseCartProductQuantity = () => {
    if (cartQuantity < shopQty) {
      setCartQuantity(+cartQuantity + 1);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

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
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteItem(itemIndex);
              }}
            >
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
          value={cartQuantity}
          onChange={changeCartProductQuantity}
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
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteItem(itemIndex);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      {matches && <Grid item xs={1} />}
    </Grid>
  );
};

export default ProductCart;
