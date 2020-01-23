const initialState = {
  cart: [],
  error: "",
};

let addNewProductInLocalCart = true;
let updateLocalCart = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTUALIZATION_LOCAL_CART_SUCCESS":
      updateLocalCart = [];
      state.cart.forEach(stateItem => {
        action.payload.forEach(actualItem => {
          if (stateItem.product._id === actualItem._id) {
            updateLocalCart.push({
              product: actualItem,
              cartQuantity: stateItem.cartQuantity,
            });
          }
        });
      });
      return {
        ...state,
        cart: updateLocalCart,
        error: "",
      };
    case "ACTUALIZATION_LOCAL_CART_FAILURE":
      return { ...state, error: action.payload };
    case "GET_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "GET_CART_FAILURE":
      return { ...state, error: action.payload };
    case "ADD_ITEM_CART_LOCAL_SUCCESS":
      addNewProductInLocalCart = true;
      updateLocalCart = state.cart.map(item => {
        if (item.product._id === action.payload._id) {
          addNewProductInLocalCart = false;
          return {
            ...item,
            cartQuantity: +item.cartQuantity + 1,
          };
        }
        return item;
      });
      if (addNewProductInLocalCart) {
        updateLocalCart = updateLocalCart.concat({
          product: action.payload,
          cartQuantity: 1,
        });
      }
      return {
        ...state,
        cart: updateLocalCart,
        error: "",
      };
    case "ADD_ITEM_CART_LOCAL_FAILURE":
      return { ...state, error: action.payload };
    case "ADD_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "ADD_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "DECREASE_ITEM_CART_LOCAL":
      updateLocalCart = [];
      state.cart.forEach(item => {
        if (item.product._id === action.payload) {
          if (+item.cartQuantity > 1) {
            updateLocalCart.push({
              product: item.product,
              cartQuantity: +item.cartQuantity - 1,
            });
          }
        } else {
          updateLocalCart.push(item);
        }
      });
      return {
        ...state,
        cart: updateLocalCart,
        error: "",
      };
    case "DECREASE_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "DECREASE_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "DELETE_ITEM_CART_LOCAL":
      updateLocalCart = [];
      state.cart.forEach(item => {
        if (item.product._id !== action.payload) {
          updateLocalCart.push(item);
        }
      });
      return {
        ...state,
        cart: updateLocalCart,
        error: "",
      };
    case "DELETE_ITEM_CART_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "DELETE_ITEM_CART_FAILURE":
      return { ...state, error: action.payload };
    case "CHANGE_ITEM_CART_QUANTITY_LOCAL":
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product._id === action.payload.id) {
            return {
              ...item,
              cartQuantity: action.payload.cartQuantity,
            };
          }
          return item;
        }),
        error: "",
      };
    case "CHANGE_ITEM_CART_QUANTITY_SUCCESS":
      return { ...state, cart: action.payload.products, error: "" };
    case "CHANGE_ITEM_CART_QUANTITY_FAILURE":
      return { ...state, error: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [], error: "" };
    default:
      return state;
  }
};

export default cartReducer;
