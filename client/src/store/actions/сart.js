import axios from "axios";
import * as constants from "../constants";
import { store } from "../index";

export const getCartSuccess = data => {
  return {
    type: constants.GET_CART_SUCCESS,
    payload: data,
  };
};
export const getCartFailure = error => {
  return {
    type: constants.GET_CART_FAILURE,
    payload: error,
  };
};
export const actualizationLocalCartSuccess = data => {
  return {
    type: constants.ACTUALIZATION_LOCAL_CART_SUCCESS,
    payload: data,
  };
};
export const actualizationLocalCartFailure = error => {
  return {
    type: constants.ACTUALIZATION_LOCAL_CART_FAILURE,
    payload: error,
  };
};

export const mergeCarts = () => dispatch => {
  const merging = data => {
    if (store.getState().cartReducer.cart.length === 0) {
      if (data !== null) {
        dispatch(getCartSuccess(data));
      }
    } else {
      let mergedCart = [];
      if (data !== null) {
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
      } else {
        mergedCart = store.getState().cartReducer.cart.map(item => {
          return {
            product: item.product._id,
            cartQuantity: item.cartQuantity,
          };
        });
      }
      const updateProductList = { products: mergedCart };
      axios
        .put("/api/cart", updateProductList)
        .then(response => {
          dispatch(getCartSuccess(response.data));
        })
        .catch(error => {
          dispatch(getCartFailure(error));
        });
    }
  };
  axios
    .get("/api/cart")
    .then(response => {
      merging(response.data);
    })
    .catch(error => {
      dispatch(getCartFailure(error));
    });
};

export const getCart = () => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .get("/api/cart")
      .then(response => {
        if (response.data !== null) {
          dispatch(getCartSuccess(response.data));
        }
      })
      .catch(error => {
        dispatch(getCartFailure(error));
      });
  } else if (store.getState().cartReducer.cart.length !== 0) {
    const storeProductList = store.getState().cartReducer.cart.map(item => {
      return item.product._id;
    });
    const actualizationProducts = { products: storeProductList };
    axios
      .post("/api/products/actualization", actualizationProducts)
      .then(response => {
        const updateLocalCart = [];
        store.getState().cartReducer.cart.forEach(stateItem => {
          response.data.forEach(actualItem => {
            if (stateItem.product._id === actualItem._id) {
              updateLocalCart.push({
                product: actualItem,
                cartQuantity: stateItem.cartQuantity,
              });
            }
          });
        });
        dispatch(actualizationLocalCartSuccess(updateLocalCart));
      })
      .catch(error => {
        dispatch(actualizationLocalCartFailure(error));
      });
  }
};

export const addItemCartLocalSuccess = data => {
  return {
    type: constants.ADD_ITEM_CART_LOCAL_SUCCESS,
    payload: data,
  };
};
export const addItemCartLocalFailure = error => {
  return {
    type: constants.ADD_ITEM_CART_LOCAL_FAILURE,
    payload: error,
  };
};
export const addItemCartSuccess = data => {
  return {
    type: constants.ADD_ITEM_CART_SUCCESS,
    payload: data,
  };
};
export const addItemCartFailure = error => {
  return {
    type: constants.ADD_ITEM_CART_FAILURE,
    payload: error,
  };
};
export const addItemCart = (id, itemNo) => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .put(`/api/cart/${id}`)
      .then(response => {
        dispatch(addItemCartSuccess(response.data));
      })
      .catch(error => {
        dispatch(addItemCartFailure(error));
      });
  } else {
    axios
      .get(`/api/products/${itemNo}`)
      .then(response => {
        let addNewProductInLocalCart = true;
        let updateLocalCart = store.getState().cartReducer.cart.map(item => {
          if (item.product._id === response.data._id) {
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
            product: response.data,
            cartQuantity: 1,
          });
        }
        dispatch(addItemCartLocalSuccess(updateLocalCart));
      })
      .catch(error => {
        dispatch(addItemCartLocalFailure(error));
      });
  }
};

export const decreaseItemCartLocal = data => {
  return {
    type: constants.DECREASE_ITEM_CART_LOCAL,
    payload: data,
  };
};
export const decreaseItemCartSuccess = data => {
  return {
    type: constants.DECREASE_ITEM_CART_SUCCESS,
    payload: data,
  };
};
export const decreaseItemCartFailure = error => {
  return {
    type: constants.DECREASE_ITEM_CART_FAILURE,
    payload: error,
  };
};
export const decreaseItemCart = id => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
      axios
          .delete(`/api/cart/product/${id}`)
          .then(response => {
            dispatch(decreaseItemCartSuccess(response.data));
          })
          .catch(error => {
            dispatch(decreaseItemCartFailure(error));
          });
  } else {
    const updateLocalCart = [];
    store.getState().cartReducer.cart.forEach(item => {
      if (item.product._id === id) {
        if (+item.cartQuantity > 1) {
          updateLocalCart.push({
            product: item.product,
            cartQuantity: +item.cartQuantity - 1,
          });
        } else {
          updateLocalCart.push(item);
        }
      } else {
        updateLocalCart.push(item);
      }
    });
    dispatch(decreaseItemCartLocal(updateLocalCart));
  }
};

export const deleteItemCartLocal = data => {
  return {
    type: constants.DELETE_ITEM_CART_LOCAL,
    payload: data,
  };
};
export const deleteItemCartSuccess = data => {
  return {
    type: constants.DELETE_ITEM_CART_SUCCESS,
    payload: data,
  };
};
export const deleteItemCartFailure = error => {
  return {
    type: constants.DELETE_ITEM_CART_FAILURE,
    payload: error,
  };
};
export const deleteItemCart = id => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    axios
      .delete(`/api/cart/${id}`)
      .then(response => {
        dispatch(deleteItemCartSuccess(response.data));
      })
      .catch(error => {
        dispatch(deleteItemCartFailure(error));
      });
  } else {
    const updateLocalCart = [];
    store.getState().cartReducer.cart.forEach(item => {
      if (item.product._id !== id) {
        updateLocalCart.push(item);
      }
    });
    dispatch(deleteItemCartLocal(updateLocalCart));
  }
};

export const changeItemCartQuantityLocal = data => {
  return {
    type: constants.CHANGE_ITEM_CART_QUANTITY_LOCAL,
    payload: data,
  };
};
export const changeItemCartQuantitySuccess = data => {
  return {
    type: constants.CHANGE_ITEM_CART_QUANTITY_SUCCESS,
    payload: data,
  };
};
export const changeItemCartQuantityFailure = error => {
  return {
    type: constants.CHANGE_ITEM_CART_QUANTITY_FAILURE,
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
      .put("/api/cart", updateProductList)
      .then(response => {
        dispatch(changeItemCartQuantitySuccess(response.data));
      })
      .catch(error => {
        dispatch(changeItemCartQuantityFailure(error));
      });
  } else {
    const updateLocalCart = store.getState().cartReducer.cart.map(item => {
      if (item.product._id === id) {
        return {
          ...item,
          cartQuantity: cartQty,
        };
      }
      return item;
    });
    dispatch(changeItemCartQuantityLocal(updateLocalCart));
  }
};

export const changeItemCartQuantityFromItemDetails = (id, cartQty, itemProduct) => dispatch => {
  if (store.getState().loginReducer.isAuthenticated) {
    if (!store.getState().cartReducer.cart.some(el => el.product._id === id)) {
      const updatedCart = store.getState().cartReducer.cart.concat({
        product: itemProduct,
        cartQuantity: cartQty,
      });
      const updateProductList = { products: updatedCart };
      axios
        .put("/api/cart", updateProductList)
        .then(response => {
          dispatch(changeItemCartQuantitySuccess(response.data));
        })
        .catch(error => {
          dispatch(changeItemCartQuantityFailure(error));
        });
    } else {
      const storeProductList = store.getState().cartReducer.cart.map(item => {
        if (item.product._id === id) {
          return { product: item.product._id, cartQuantity: +item.cartQuantity + cartQty };
        }
        return { product: item.product._id, cartQuantity: item.cartQuantity };
      });
      const updateProductList = { products: storeProductList };
      axios
        .put("/api/cart", updateProductList)
        .then(response => {
          dispatch(changeItemCartQuantitySuccess(response.data));
        })
        .catch(error => {
          dispatch(changeItemCartQuantityFailure(error));
        });
    }
  } else {
    let addNewProductInLocalCart = true;
    let updateLocalCart = store.getState().cartReducer.cart.map(item => {
      if (item.product._id === id) {
        addNewProductInLocalCart = false;
        return {
          ...item,
          cartQuantity: +item.cartQuantity + cartQty,
        };
      }
      return item;
    });
    if (addNewProductInLocalCart) {
      updateLocalCart = updateLocalCart.concat({
        product: itemProduct,
        cartQuantity: cartQty,
      });
    }
    dispatch(addItemCartLocalSuccess(updateLocalCart));
  }
};

export const clearCart = () => {
  return {
    type: constants.CLEAR_CART,
  };
};
