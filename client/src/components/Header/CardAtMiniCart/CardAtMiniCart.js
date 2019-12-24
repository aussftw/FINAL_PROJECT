import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "./useStyles";

const CardAtMiniCart = ({ url, title, qty, price }) => {
  const classes = useStyles();
  const [isAddedToCart, setAddedToCart] = useState(true);
  console.log("keks");
  function removeFromMiniCartBtn() {
    setAddedToCart(!isAddedToCart);
    // if(localStorage.getItem(`AddedToCart${id}`)){
    //     localStorage.removeItem(`AddedToCart${id}`);
    // }
  }

  return (
    isAddedToCart && (
      <li className={classes.mini_cart_card}>
        <Link to="/" className={classes.mini_cart_card_link}>
          <img
            src={`${url}`}
            className={classes.mini_cart_card_img}
            alt="img"
          />
          <div>
            <p className={classes.mini_cart_card_title}>{title}</p>
            <p>
              {qty} x{" "}
              <span className={classes.mini_cart_card_price}>
                ${price.toFixed(2)}
              </span>
            </p>
          </div>
        </Link>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={classes.mini_cart_card_close}
          onClick={removeFromMiniCartBtn}
        >
          <Tooltip title="close">
            <CloseIcon fontSize="small" />
          </Tooltip>
        </div>
      </li>
    )
  );
};

export default CardAtMiniCart;
