import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";
import { deleteItemCart } from "../../../../../store/actions/сart";
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
        <div className={classes.mini_cart_card_img_wrapper}>
          <img src={`${url}`} className={classes.mini_cart_card_img} alt="img" />
        </div>
        <div>
          <Typography className={classes.mini_cart_card_title}>{title}</Typography>
          <Typography className={classes.mini_cart_card_quantity}>
            {`${qty} x `}
            <Typography className={classes.mini_cart_card_price} component="span">
              {`$${price.toFixed(2)}`}
            </Typography>
          </Typography>
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
  );
};

export default connect(null, { deleteCartItem: deleteItemCart })(
  CardAtMiniCart
);
