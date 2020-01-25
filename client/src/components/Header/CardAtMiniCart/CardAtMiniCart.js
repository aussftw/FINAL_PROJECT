import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { deleteItemCart } from "../../../store/actions/сart";
import useStyles from "./useStyles";

const CardAtMiniCart = ({
  id,
  itemNo,
  url,
  title,
  qty,
  price,
  deleteCartItem,
}) => {
  const classes = useStyles();

  function removeFromMiniCartBtn() {
    deleteCartItem(id);
  }

  return (
    <li className={classes.mini_cart_card}>
      <Link to={`/products/${itemNo}`} className={classes.mini_cart_card_link}>
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
      <Tooltip title="close">
        <CloseIcon
          fontSize="small"
          className={classes.mini_cart_card_close}
          onClick={removeFromMiniCartBtn}
        />
      </Tooltip>
    </li>
    // )
  );
};

export default connect(null, { deleteCartItem: deleteItemCart })(
  CardAtMiniCart
);
