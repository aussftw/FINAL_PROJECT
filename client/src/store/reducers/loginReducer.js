import * as constants from "../constants";

const initialState = {
  loginPreloader: true,
  isAuthenticated: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
    isAdmin: false,
  },
  error: "",
  modalOpen: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN_SUCCESS:
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
          isAdmin: action.payload.isAdmin,
        },
        error: "",
      };
    case constants.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          address: "",
          isAdmin: false,
        },
        error: "",
      };
    case constants.EDIT_USER_DATA_SUCCESS:
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
          isAdmin: action.payload.isAdmin,
        },
        error: "",
      };
    case constants.EDIT_USER_DATA_FAILURE:
      return { ...state, error: action.payload };
    case constants.LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case constants.EDIT_USER_DATA_LOCAL:
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
          isAdmin: state.user.isAdmin,
        },
      };
    case constants.PRELOADER_CLOSE:
      return {
        ...state,
        loginPreloader: false,
      };
    case constants.USER_FROM_JWT:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: "",
          telephone: "",
          address: "",
          isAdmin: action.payload.isAdmin,
        },
      };
    case constants.MODAL_OPEN:
      return {
        ...state,
        modalOpen: true,
      };
    case constants.MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
