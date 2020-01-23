import React from "react";
import { connect } from "react-redux";
import v4 from "uuid";
import useStyles from "./useStyles";
import WishlistCard from "./WishlistCard/WishlistCard";
import Preloader from "../../Preloader";
import { getWishlist } from "../../../store/actions/wishlist";

// eslint-disable-next-line no-shadow
function WishList({ isLoading, wishlist, error }) {
  const classes = useStyles();

  const errorMessageArray = [
    "Product is absent in wishlist",
    "Product was added to wishlist before",
    "Wishlist does not exist",
  ];
  // eslint-disable-next-line no-nested-ternary
  const errorMessage = error
    ? errorMessageArray.includes(error.response.data.message)
      ? ""
      : error
    : "";

  return isLoading ? (
    <Preloader />
  ) : (
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
      {Boolean(errorMessage) && (
        <p className={classes.message}>{`${errorMessage.message}`}</p>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoading: state.wishlistReducer.isLoading,
    wishlist: state.wishlistReducer.wishlist,
    error: state.wishlistReducer.error,
  };
}
export default connect(mapStateToProps, { getWishlist })(WishList);
