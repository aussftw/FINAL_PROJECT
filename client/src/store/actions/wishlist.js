import axios from "axios";
import * as constants from "../constants";

export const getWishlistSuccess = data => {
  return {
    type: constants.WISHLIST_GET_SUCCESS,
    payload: data,
  };
};
export const getWishlistFailure = err => {
  return {
    type: constants.WISHLIST_GET_FAILURE,
    payload: err,
  };
};

export const getWishlist = () => dispatch => {
  dispatch({ type: constants.WISHLIST_REQUEST });
  axios
    .get("/api/wishlist")
    .then(res => {
      dispatch(getWishlistSuccess(res.data));
    })
    .catch(err => {
      dispatch(getWishlistFailure(err));
    });
};

export const deleteWishlistItemSuccess = data => {
  return {
    type: constants.WISHLIST_DELETE_ITEM_SUCCESS,
    payload: data,
  };
};
export const deleteWishlistItemtFailure = err => {
  return {
    type: constants.WISHLIST_DELETE_ITEM_FAILURE,
    payload: err,
  };
};

export const wishlistDeleteItem = id => dispatch => {
  axios
    .delete(`/api/wishlist/${id}`)
    .then(res => {
      dispatch(deleteWishlistItemSuccess(res.data));
    })
    .catch(err => {
      dispatch(deleteWishlistItemtFailure(err));
    });
};

export const addWishlistItemSuccess = data => {
  return {
    type: constants.WISHLIST_ADD_ITEM_SUCCESS,
    payload: data,
  };
};
export const addWishlistItemtFailure = err => {
  return {
    type: constants.WISHLIST_ADD_ITEM_FAILURE,
    payload: err,
  };
};

export const wishlistAddItem = id => dispatch => {
  axios
    .put(`/api/wishlist/${id}`)
    .then(res => {
      dispatch(addWishlistItemSuccess(res.data));
    })
    .catch(err => {
      dispatch(addWishlistItemtFailure(err));
    });
};

export const wishlistLogOut = () => {
  return {
    type: constants.WISHLIST_LOG_OUT,
  };
};
