const initialState = {
  login: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      console.log("and i am in here");
      return { ...state, login: true };
    case "LOG_OUT":
      return { ...state, login: false };
    default:
      return state;
  }
};

export default loginReducer;
