import React, { useState } from "react";
import MainButton from "./components/common/buttons/MainButton";
import CartMini from "./components/Header/CartMini/CartMini";

import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/index";
import Stock from "./components/Stock";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <h1>Some Shop</h1>
      <p> for real</p>

      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}

      <Stock />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
