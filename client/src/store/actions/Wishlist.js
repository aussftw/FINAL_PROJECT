import axios from "axios";

export const getWishlistSuccess = data => {
  return {
    type: "WISHLIST_GET_SUCCESS",
    payload: data,
  };
};
export const getWishlistFailure = err => {
  return {
    type: "WISHLIST_GET_FAILURE",
    payload: err,
  };
};

export const getWishlist = () => dispatch => {
  axios
    .get("/wishlist")
    .then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
      if (!res.data) {
        // eslint-disable-next-line no-console
        console.log("You don't have wishlist");
        return;
      }
      dispatch(getWishlistSuccess(res.data));
    })
    .catch(err => {
      dispatch(getWishlistFailure(err));
    });
};

export const deleteWishlistItemSuccess = data => {
  return {
    type: "WISHLIST_DELETE_ITEM_SUCCESS",
    payload: data,
  };
};
export const deleteWishlistItemtFailure = err => {
  return {
    type: "WISHLIST_DELETE_ITEM_FAILURE",
    payload: err,
  };
};

export const wishlistDeleteItem = id => dispatch => {
  axios
    .delete(`/wishlist/${id}`)
    .then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
      dispatch(deleteWishlistItemSuccess(res.data));
      console.log(res);
    })
    .catch(err => {
      dispatch(deleteWishlistItemtFailure(err));
      console.log(err);
    });
};

export const addWishlistItemSuccess = data => {
  return {
    type: "WISHLIST_ADD_ITEM_SUCCESS",
    payload: data,
  };
};
export const addWishlistItemtFailure = err => {
  return {
    type: "WISHLIST_ADD_ITEM_FAILURE",
    payload: err,
  };
};

export const wishlistAddItem = id => dispatch => {
  axios
    .put(`/wishlist/${id}`)
    .then(res => {
      // eslint-disable-next-line no-console
      console.log(res);
      dispatch(addWishlistItemSuccess(res.data));
    })
    .catch(err => {
      dispatch(addWishlistItemtFailure(err));
    });
};
