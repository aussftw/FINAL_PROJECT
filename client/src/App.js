import React, { useState } from "react";
import MainButton from "./components/common/buttons/MainButton";
import CartMini from "./components/Header/CartMini/CartMini";
import TopRated from "./components/TopRated/TopRated";

import HomePage from "./components/HomePage/HomePage";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header";
import SubHeader from "./components/Header/SubHeader";
import BackToTop from "./components/common/GoUpButton";
import Footer from "./components/Footer/index";

import Stock from "./components/Stock";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <BackToTop />
      <Header />
      <SubHeader />
      <TopRated />
      <HomePage />
      <Stock />
      <Header />
      <BrowserRouter>
        <SubHeader />
      </BrowserRouter>
      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}
      <Brands />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
