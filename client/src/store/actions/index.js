import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export function getCategories() {
  return dispatch => {
    axios
      .get("/catalog")
      .then(catalog => {
        dispatch({
          type: "GET_CATEGORIES_SUCCESS",
          payload: catalog.data,
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_CATEGORIES_ERROR",
          payload: err,
        });
      });
  };
}

export function getLinks() {
  return dispatch => {
    // dispatch({
    //   type: "GET_FRIENDS_REQUEST",
    // })
    axios
      .get("/links")
      .then(links => {
        dispatch({
          type: "GET_LINKS_SUCCESS",
          payload: links.data,
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_LINKS_ERROR",
          payload: err,
        });
      });
  };
}
//
// export function searchPhrases(text) {
//   return dispatch => {
//     // dispatch({
//     //   type: "GET_FRIENDS_REQUEST",
//     // })
//     console.log(text);
//     axios
//       .post("/products/search", text)
//       .then(products => {
//         dispatch({
//           type: "SEARCH_SUCCESS",
//           payload: products.data,
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: "SEARCH_ERROR",
//           payload: err,
//         });
//       });
//   };
// }
export function searchPhrases(data) {
  console.log("data", data);
  return {
    type: "SEARCH_SUCCESS",
    payload: data,
  };
}
// export function searchPhrases(data) {
//   return dispatch => {
//     dispatch({
//       type: "SEARCH_LOADING",
//     });
//
//     setTimeout(() => {
//       dispatch({
//         type: "SEARCH_SUCCESS",
//         payload: data,
//       })
//     }, 2000)
//   }
// };

export const logIn = data => {
  // eslint-disable-next-line no-console
  console.log("i am in ");
  return {
    type: "LOG_IN",
    payload: data,
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
