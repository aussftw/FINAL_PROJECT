import * as constants from "../constants";

const initialState = {
  isAuthenticated: false,
  userData: {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
  },
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userData: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
        },
      };
    case constants.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        userData: {
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          address: "",
        },
      };
    case constants.EDIT_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
        },
      };
    case constants.EDIT_USER_DATA_FAILURE:
      return state;
    case constants.LOG_IN_FAILURE:
      return {
        error: action.paylod,
      };
    default:
      return state;
  }
};

export default loginReducer;
