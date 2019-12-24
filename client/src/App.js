
import React, { useState } from "react";
import MainButton from "./components/common/buttons/MainButton";
import CartMini from "./components/Header/CartMini/CartMini";
import TopRated from './components/TopRated/TopRated';


import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/index";
import Test from "./components/Header";
import Stock from "./components/Stock";


function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <h1>Some Shop</h1>
      <TopRated />
      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}

      <Test />
      <Brands />
      <Footer />
      <Stock />

    </div>
  );
}

export default App;
