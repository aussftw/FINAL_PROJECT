import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import WishlistCard from "./WishlistCard/WishlistCard";

import { getWishlist } from "../../../store/actions/Wishlist";

// const list = [
//   {imageUrls: ["img/products/Aloe.jpg", "img/products/Aloe-2.jpg"], quantity: 45, _id: "5e03df49fe7e3c01e07f57be", name: "aloe vera", currentPrice: 7.99, previousPrice: 9, productUrl: "/aloe",},
//   {imageUrls: ["img/products/lavender.jpg", "img/products/lavender-2.jpg"], quantity: 0, _id: "5e04b6eca8c2961dbc2e62cd", name: "lavender", currentPrice: 12.99, previousPrice: 15, productUrl: "/lavender",},
//   {imageUrls: ["img/products/Clusia-rosea.jpg", "img/products/Clusia-rosea-2.jpg", "img/products/Clusia-rosea-3.jpg", "img/products/Clusia-rosea-4.jpg",], quantity: 60, _id: "5e04f38176188f27f0aa35c2", name: "clusia rosea princess - autograph tree", currentPrice: 8.8, productUrl: "/clusia-rosea",},
// ];

// eslint-disable-next-line no-shadow
function WishList({ wishlist, error, getWishlist }) {
  // eslint-disable-next-line no-unused-expressions
  useEffect(() => {
    getWishlist();
  }, [getWishlist]);
  const classes = useStyles();

  // const [wishlist1, setWishlist] = useState(list);
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Wishlist</h2>
      {wishlist.length > 0 ? (
        <div>
          {wishlist.map(item => {
            return (
              <WishlistCard
                key={item._id}
                id={item._id}
                img={item.imageUrls[0]}
                title={item.name}
                qty={item.quantity}
                price={item.currentPrice}
              />
            );
          })}
        </div>
      ) : (
        <p className={classes.message}>Your wishlist is empty</p>
      )}
      {Boolean(error) && <p className={classes.message}>{error.message}</p>}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlistReducer.wishlist,
    error: state.wishlistReducer.error,
  };
}
export default connect(mapStateToProps, { getWishlist })(WishList);
