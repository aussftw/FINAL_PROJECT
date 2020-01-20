import * as constants from "../constants";

export const logIn = data => {
  // eslint-disable-next-line no-console
  console.log("i am in ");
  return {
    type: constants.LOG_IN_SUCCESS,
    payload: data,
  };
};

export const logInFailure = data => {
  return {
    type: constants.LOG_IN_FAILURE,
    payload: data,
  };
};

export const logOut = () => {
  return {
    type: constants.LOG_OUT,
  };
};
