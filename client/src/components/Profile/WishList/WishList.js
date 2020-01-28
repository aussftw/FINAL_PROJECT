import React from "react";
import { connect } from "react-redux";
import v4 from "uuid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";
import WishlistCard from "./WishlistCard/WishlistCard";
import PreloaderAdaptive from "../../Preloader/Adaptive";

function WishList({ isLoading, wishlist, error }) {
  const classes = useStyles();
  const errorMessageArray = [
    "Product is absent in wishlist",
    "Product was added to wishlist before",
    "Wishlist does not exist",
  ];

  let errorMessage = "";
  if (error) {
    if (errorMessageArray.includes(error.response.data.message)) {
      errorMessage = "";
    } else {
      errorMessage = error;
    }
  } else {
    errorMessage = error;
  }

  return isLoading ? (
    <PreloaderAdaptive />
  ) : (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3">Wishlist</Typography>
      {wishlist.length > 0 ? (
        <div>
          {wishlist.map(item => {
            const randomId = v4();

            return (
              <WishlistCard
                key={randomId}
                id={item._id}
                itemNo={item.itemNo}
                img={item.imageUrls[0]}
                title={item.name}
                qty={item.quantity}
                price={item.currentPrice}
              />
            );
          })}
        </div>
      ) : (
        <Typography className={classes.message}>Your wishlist is empty</Typography>
      )}
      {Boolean(errorMessage) && (
        <Typography className={classes.message}>{`${errorMessage.message}`}</Typography>
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
export default connect(mapStateToProps)(WishList);
