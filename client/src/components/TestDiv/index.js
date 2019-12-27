/*
import React, { useEffect} from "react";
import { connect } from "react-redux";
import { getCategories } from "..";


function TestDiv(props) {

  useEffect(
    () => {
      props.getCategories();
      // return props.category.categories;
    },[props],
  );
  return (
    <div >
      {/!* <p> *!/}
      {/!*  { console.log(props.category.categories)} *!/}
      {/!* </p> *!/}

      {/!* categories={props.category.categories} *!/}

    </div>
  );
}

function mapStateToProps(state) {
  return {
    category: state.categoriesReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDiv); */
