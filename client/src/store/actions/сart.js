import axios from "axios";
import { store } from "../index";

export const getCartSuccess = data => {
  return {
    type: "GET_CART_SUCCESS",
    payload: data,
  };
};
export const getCartFailure = error => {
  return {
    type: "GET_CART_FAILURE",
    payload: error,
  };
};
export const actualizationLocalCartSuccess = data => {
  return {
    type: "ACTUALIZATION_LOCAL_CART_SUCCESS",
    payload: data,
  };
};
export const actualizationLocalCartFailure = error => {
  return {
    type: "ACTUALIZATION_LOCAL_CART_FAILURE",
    payload: error,
  };
};

export const mergeCarts = () => dispatch => {
  const merging = data => {
    if (store.getState().cartReducer.cart.length === 0) {
      dispatch(getCartSuccess(data));
    } else {
      const localCart = store.getState().cartReducer.cart.map(item => {
        return {
          product: item.product._id,
          cartQuantity: item.cartQuantity,
          isMatched: false,
        };
      });
      const serverCart = data.products.map(item => {
        return {
          product: item.product._id,
          cartQuantity: item.cartQuantity,
          isMatched: false,
        };
      });
      const mergedCart = [];
      localCart.forEach((localItem, localIndex) => {
        serverCart.forEach((serverItem, serverIndex) => {
          if (localItem.product === serverItem.product) {
            mergedCart.push({
              product: serverItem.product,
              cartQuantity: Math.max(
                +localItem.cartQuantity,
                +serverItem.cartQuantity
              ),
            });
            serverCart[serverIndex].isMatched = true;
            localCart[localIndex].isMatched = true;
          }
        });
      });
      localCart.concat(serverCart).forEach(item => {
        if (!item.isMatched) {
          mergedCart.push({
            product: item.product,
            cartQuantity: item.cartQuantity,
          });
        }
      });
      const updateProductList = { products: mergedCart };
      axios
        .put("/cart", updateProductList)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response.data);
          dispatch(getCartSuccess(response.data));
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error.response);
          dispatch(getCartFailure(error));
        });
    }
  };
  axios
    .get("/cart")
    .then(response => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      merging(response.data);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error.response);
      dispatch(getCartFailure(error));
    });
};

export const getCart = () => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .get("/cart")
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(getCartSuccess(response.data));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response);
        dispatch(getCartFailure(error));
      });
  } else {
    const storeProductList = store.getState().cartReducer.cart.map(item => {
      return item.product._id;
    });
    const actualizationProducts = { products: storeProductList };
    axios
      .post("/products/actualization", actualizationProducts)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(actualizationLocalCartSuccess(response.data));
      })
      .catch(error => {
        dispatch(actualizationLocalCartFailure(error));
      });
  }
};

export const addItemCartLocalSuccess = data => {
  return {
    type: "ADD_ITEM_CART_LOCAL_SUCCESS",
    payload: data,
  };
};
export const addItemCartLocalFailure = error => {
  return {
    type: "ADD_ITEM_CART_LOCAL_FAILURE",
    payload: error,
  };
};
export const addItemCartSuccess = data => {
  return {
    type: "ADD_ITEM_CART_SUCCESS",
    payload: data,
  };
};
export const addItemCartFailure = error => {
  return {
    type: "ADD_ITEM_CART_FAILURE",
    payload: error,
  };
};
export const addItemCart = (id, itemNo) => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .put(`/cart/${id}`)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(addItemCartSuccess(response.data));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        dispatch(addItemCartFailure(error));
      });
  } else {
    axios
      .get(`/products/${itemNo}`)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(addItemCartLocalSuccess(response.data));
      })
      .catch(error => {
        dispatch(addItemCartLocalFailure(error));
      });
  }
};

export const decreaseItemCartLocal = data => {
  return {
    type: "DECREASE_ITEM_CART_LOCAL",
    payload: data,
  };
};
export const decreaseItemCartSuccess = data => {
  return {
    type: "DECREASE_ITEM_CART_SUCCESS",
    payload: data,
  };
};
export const decreaseItemCartFailure = error => {
  return {
    type: "DECREASE_ITEM_CART_FAILURE",
    payload: error,
  };
};
export const decreaseItemCart = id => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .delete(`/cart/product/${id}`)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(decreaseItemCartSuccess(response.data));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        dispatch(decreaseItemCartFailure(error));
      });
  } else {
    dispatch(decreaseItemCartLocal(id));
  }
};

export const deleteItemCartLocal = data => {
  return {
    type: "DELETE_ITEM_CART_LOCAL",
    payload: data,
  };
};
export const deleteItemCartSuccess = data => {
  return {
    type: "DELETE_ITEM_CART_SUCCESS",
    payload: data,
  };
};
export const deleteItemCartFailure = error => {
  return {
    type: "DELETE_ITEM_CART_FAILURE",
    payload: error,
  };
};
export const deleteItemCart = id => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .delete(`/cart/${id}`)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(deleteItemCartSuccess(response.data));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        dispatch(deleteItemCartFailure(error));
      });
  } else {
    dispatch(deleteItemCartLocal(id));
  }
};

export const changeItemCartQuantityLocal = data => {
  return {
    type: "CHANGE_ITEM_CART_QUANTITY_LOCAL",
    payload: data,
  };
};
export const changeItemCartQuantitySuccess = data => {
  return {
    type: "CHANGE_ITEM_CART_QUANTITY_SUCCESS",
    payload: data,
  };
};
export const changeItemCartQuantityFailure = error => {
  return {
    type: "CHANGE_ITEM_CART_QUANTITY_FAILURE",
    payload: error,
  };
};
export const changeItemCartQuantity = (id, cartQty) => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    const storeProductList = store.getState().cartReducer.cart.map(item => {
      if (item.product._id === id) {
        return { product: item.product._id, cartQuantity: cartQty };
      }
      return { product: item.product._id, cartQuantity: item.cartQuantity };
    });
    const updateProductList = { products: storeProductList };
    axios
      .put("/cart", updateProductList)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        dispatch(changeItemCartQuantitySuccess(response.data));
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        dispatch(changeItemCartQuantityFailure(error));
      });
  } else {
    const data = { id, cartQuantity: cartQty };
    dispatch(changeItemCartQuantityLocal(data));
  }
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
