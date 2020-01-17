import React from "react";
import Card from "@material-ui/core/Card";
import useStyles from "./useStyles";
import CardAtMiniCart from "../CardAtMiniCart/CardAtMiniCart";
import MainButton from "../../common/buttons/MainButton";

import hardCodedGoods from "./HardCodedGoodsForCart";

const hardCodedGoodsForCart = hardCodedGoods;
// const hardCodedGoodsForCart = [];

function numberWithCommas(x) {
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const CartMini = ({ goodsAtCart = hardCodedGoodsForCart }) => {
  const classes = useStyles();
  const subTotal = goodsAtCart
    .reduce(function(sum, current) {
      return sum + current.price * current.qty;
    }, 0)
    .toFixed(2);
  const subTotalWithComas = numberWithCommas(subTotal);

  return (
    <Card className={classes.card}>
      {goodsAtCart.length > 0 ? (
        <div>
          <ul className={classes.mini_cart_list}>
            {goodsAtCart.map(item => {
              return (
                <CardAtMiniCart
                  key={item.id}
                  url={item.url}
                  title={item.title}
                  qty={item.qty}
                  price={item.price}
                />
              );
            })}
          </ul>
          <p className={classes.total}>
            <span className={classes.subtotal}>Subtotal: </span>
            <span className={classes.subtotal_price}>${subTotalWithComas}</span>
          </p>
          <p className={classes.mini_cart_buttons}>
            <MainButton text="VIEW CART">VIEW CART</MainButton>
            <MainButton text="CHECKOUT">CHECKOUT</MainButton>
          </p>
        </div>
      ) : (
        <p className={classes.empty_mini_cart}>No products in the cart.</p>
      )}
    </Card>
  );
};

export default CartMini;
