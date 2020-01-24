import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    // eslint-disable-next-line no-undef
    localStorage.setItem("authToken", token);
  } else {
    delete axios.defaults.headers.common.Authorization;
    // eslint-disable-next-line no-undef
    localStorage.removeItem("authToken");
  }
};

export default setAuthToken;
