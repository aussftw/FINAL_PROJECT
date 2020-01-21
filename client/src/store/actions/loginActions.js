import axios from "axios";
import * as constants from "../constants";
import setAuthToken from "../../components/common/setAuthToken";

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

export const preloaderClose = () => {
  return {
    type: constants.PRELOADER_CLOSE,
  };
};

export const getUser = () => dispatch => {
  axios
    .get("/customers/customer")
    .then(response => {
      dispatch(logInSuccess(response.data));
      dispatch(preloaderClose());
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
      if (response.statusText === "OK" && response.data.success) {
        setAuthToken(response.data.token);
      }
      dispatch(getUser());
    })
    .catch(error => {
      dispatch(logInFailure(error));
    });
};
