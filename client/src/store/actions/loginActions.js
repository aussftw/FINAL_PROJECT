import axios from "axios";
import * as constants from "../constants";
import setAuthToken from "../../components/common/setAuthToken";
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

export const getUser = () => dispatch => {
  axios
    .get("/customers/customer")
    .then(response => {
      dispatch(logInSuccess(response.data));
      // eslint-disable-next-line no-console
      console.log("Our User", response);
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
    .post("/customers/login", user)
    .then(response => {
      // eslint-disable-next-line no-console
      console.log(response.data.token);
      if (response.statusText === "OK" && response.data.success) {
        setAuthToken(response.data.token);
      }
      dispatch(getUser());
      dispatch(getWishlist());
    })
    .catch(error => {
      dispatch(logInFailure(error));
    });
};
