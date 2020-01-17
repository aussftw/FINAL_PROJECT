import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";

const WishlistItem = ({ url, name, qty, price }) => {
  const classes = useStyles();
  const [isAddedToCart, setAddedToCart] = useState(true);

  function removeFromMiniCartBtn() {
    setAddedToCart(!isAddedToCart);
    // if(localStorage.getItem(`AddedToCart${id}`)){
    //     localStorage.removeItem(`AddedToCart${id}`);
    // }
  }

  return (
    isAddedToCart && (
      <div className={classes.mini_cart_card}>
        <Link to="/" className={classes.mini_cart_card_link}>
          <img
            src={`${url}`}
            className={classes.mini_cart_card_img}
            alt={name}
          />
        </Link>
        <Link to="/" className={classes.mini_cart_card_link}>
          <p className={classes.mini_cart_card_title}>{name}</p>
        </Link>
        <span className={classes.mini_cart_card_price}>
          ${price.toFixed(2)}
        </span>
        <span className={classes.mini_cart_card_stock}>
          {qty > 0 ? "In Stock" : "Out Stock"}
        </span>
        <Button>ADD TO CART</Button>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={classes.mini_cart_card_close}
          onClick={removeFromMiniCartBtn}
        >
          <Tooltip title="delete">
            <CloseIcon fontSize="small" />
          </Tooltip>
        </div>
      </div>
    )
  );
};

export default WishlistItem;
