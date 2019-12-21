import React from "react";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/index";
import Test from "./components/Header";
import Stock from "./components/Stock";

function App() {
  return (
    <div className="App">
      <h1>Some Shop</h1>
      <p> for real</p>
      <Test />
      <Brands />
      <Footer />
      <Stock />
    </div>
  );
}

export default App;
