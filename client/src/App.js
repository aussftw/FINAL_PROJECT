import React from "react";

import ItemCard from "./components/ItemCard/ItemCard";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <h1>Some Shop</h1>
      <p> for real</p>

      <ItemCard
        title="Exercitat Virginia Exercitat Virginia"
        value={3.675698}
      />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
