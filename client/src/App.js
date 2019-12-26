import React, { useState } from "react";
// import { BrowserRouter } from "react-router-dom";

import { connect } from "react-redux";
import MainButton from "./components/common/buttons/MainButton";
import CartMini from "./components/Header/CartMini/CartMini";
import HomePage from "./components/HomePage/HomePage";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header";
import SubHeader from "./components/Header/SubHeader";
import BackToTop from "./components/common/GoUpButton";

import Footer from "./components/Footer/index";
// eslint-disable-next-line
// import Stock from "./components/Stock";
import Subscribe from "./components/Subscribe/Subscribe";
import { getCategories } from "./store/actions";

function App(props) {
  const [clicked, setClicked] = useState(false);
  // useEffect(
  //   () => {
  //     props.getCategories();
  //     // return props.category.categories;
  //   },[props],
  // );

  return (
    <div className="App">
      <BackToTop />
      <Header />

      <HomePage />
      <button onClick={() => props.getCategories()}>Categories</button>
      {/* <p> */}
      {/*  { console.log(props.category.categories)} */}
      {/* </p> */}

      <SubHeader />
      {/* categories={props.category.categories} */}

      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}
      {/* eslint-disable-next-line */}
      {/* <Stock /> */}
      <Brands />
      <Subscribe />
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
