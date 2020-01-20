import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import v4 from "uuid";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import WishlistCard from "./WishlistCard/WishlistCard";

import { getWishlist } from "../../../store/actions/wishlist";

function WishList({ wishlist, error }) {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Wishlist</h2>
      {wishlist.length > 0 ? (
        <div>
          {wishlist.map(item => {
            const randomId = v4();

            return (
              <WishlistCard
                key={randomId}
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
