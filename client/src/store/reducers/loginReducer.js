const initialState = {
  login: false,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    address: "",
  },
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
    default:
      return state;
  }
};

export default loginReducer;
