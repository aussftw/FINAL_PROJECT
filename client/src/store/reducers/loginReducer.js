const initialState = {
  login: false,
  user: {
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
    case "LOG_IN":
      return {
        ...state,
        login: true,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        login: false,
        user: {
          firstName: "",
          lastName: "",
          email: "",
          telephone: "",
          address: "",
        },
      };
    case "EDIT_USER_DATA_SUCCESS":
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
        },
      };
    case "EDIT_USER_DATA_FAILURE":
      return { ...state, error: action.payload };
    case "EDIT_USER_DATA":
      return {
        ...state,
        user: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          telephone: action.payload.telephone,
          address: action.payload.address,
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
