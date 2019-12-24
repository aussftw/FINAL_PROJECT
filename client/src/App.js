import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

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

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <BackToTop />
      <Header />
      <BrowserRouter>
        <SubHeader />
      </BrowserRouter>
      <HomePage />
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

export default App;
