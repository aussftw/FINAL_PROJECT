import axios from "axios";
import * as constants from "../constants";

// Получение с бэка фильтров
export const getProducts = filters => dispatch => {
  axios.get("/api/products/filter", {
      params: filters,
    })
    .then(list => {
      dispatch({
        type: constants.GET_PRODUCT_LISTING,
        payload: list.data.products,
      });
    });
};

export const getCategories = () => dispatch => {
  axios.get("/api/catalog").then(list => {
    dispatch({
      type: constants.GET_CATEGORY_LISTING,
      payload: list.data,
    });
  });
};

export const getColors = () => dispatch => {
  axios.get("/api/colors").then(list => {
    dispatch({
      type: constants.GET_COLOR_LISTING,
      payload: list.data,
    });
  });
};

export const getSizes = () => dispatch => {
  axios.get("/api/sizes").then(list => {
    dispatch({
      type: constants.GET_SIZE_LISTING,
      payload: list.data,
    });
  });
};

// Работа с фильтрами
export const selectCategory = category => dispatch => {
  dispatch({
    type: constants.SELECT_CATEGORY,
    payload: category,
  });
};

export const selectColor = event => dispatch => {
  dispatch({
    type: constants.SELECT_COLOR,
    payload: { [event.target.name]: event.target.value },
  });
};

export const removeColor = color => dispatch => {
  if (color === "") {
    dispatch({
      type: constants.REMOVE_COLOR,
      payload: undefined,
    });
  } else {
    dispatch({
      type: constants.REMOVE_COLOR,
      payload: color,
    });
  }
};

export const selectSizes = event => dispatch => {
  dispatch({
    type: constants.SELECT_SIZE,
    payload: { [event.target.name]: event.target.value },
  });
};

export const removeSizes = size => dispatch => {
  if (size === "") {
    dispatch({
      type: constants.REMOVE_SIZE,
      payload: undefined,
    });
  } else {
    dispatch({
      type: constants.REMOVE_SIZE,
      payload: size,
    });
  }
};

export const selectPrice = price => dispatch => {
  dispatch({
    type: constants.SELECT_PRICE,
    payload: price,
  });
};

export const setCurrentPage = currentPage => dispatch => {
  console.log("SELECT_CURRENT_PAGE",currentPage);
  dispatch({
    type: constants.SELECT_CURRENT_PAGE,
    payload: currentPage,
  });
};