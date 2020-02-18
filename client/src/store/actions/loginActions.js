import axios from "axios";
import jwt from "jwt-decode";
import * as constants from "../constants";
import setAuthToken from "../../components/common/setAuthToken";
import { mergeCarts } from "./сart";
import { getWishlist } from "./wishlist";

const logInSuccess = data => {
  return {
    type: constants.LOG_IN_SUCCESS,
    payload: data,
  };
};

const logInFailure = error => {
  return {
    type: constants.LOG_IN_FAILURE,
    payload: error,
  };
};

export const modalOpen = () => {
  return{
    type: constants.MODAL_OPEN,
  }
};

export const modalClose = () => {
  return{
    type: constants.MODAL_CLOSE,
  }
};

export const userFromJwt = data => {
  return {
    type: constants.USER_FROM_JWT,
    payload: data,
  };
};

export const preloaderClose = () => {
  return {
    type: constants.PRELOADER_CLOSE,
  };
};

export const getUser = () => dispatch => {
  axios
    .get("/api/customers/customer")
    .then(response => {
      dispatch(logInSuccess(response.data));
    })
    .catch(error => {
      dispatch(logInFailure(error));
    });
};

export const logOut = () => {
  return {
    type: constants.LOG_OUT,
  };
};

export const logIn = user => dispatch => {
  axios
    .post("/api/customers/login", user)
    .then(response => {
      if (response.statusText === "OK" && response.data.success) {
        setAuthToken(response.data.token);
        dispatch(userFromJwt(jwt(response.data.token)));
      }
      dispatch(modalClose());
      dispatch(getWishlist());
      dispatch(getUser());
      dispatch(mergeCarts());
    })
    .catch(error => {
      dispatch(logInFailure(error));
    });
};
