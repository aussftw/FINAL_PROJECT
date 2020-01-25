export function searchPhrases(data) {
  return {
    type: "SEARCH_SUCCESS",
    payload: data,
  };
}
export function searchPhrasesFailure(err) {
  return {
    type: "SEARCH_FAILURE",
    payload: err,
  };
}
