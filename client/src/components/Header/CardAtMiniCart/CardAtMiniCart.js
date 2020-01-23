import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import { deleteItemCart } from "../../../store/actions/Cart";

// eslint-disable-next-line no-shadow
const CardAtMiniCart = ({ id, url, title, qty, price, deleteItemCart }) => {
  const classes = useStyles();

  function removeFromMiniCartBtn() {
    deleteItemCart(id);
  }

  return (
    <li className={classes.mini_cart_card}>
      <Link to="/" className={classes.mini_cart_card_link}>
        <img src={`${url}`} className={classes.mini_cart_card_img} alt="img" />
        <div>
          <p className={classes.mini_cart_card_title}>{title}</p>
          <p>
            {`${qty} x `}
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
    // )
  );
};

export default connect(null, { deleteItemCart })(CardAtMiniCart);
