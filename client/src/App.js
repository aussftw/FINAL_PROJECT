import React, { useState } from "react";
import {BrowserRouter} from 'react-router-dom';

import MainButton from "./components/common/buttons/MainButton";
import CartMini from "./components/Header/CartMini/CartMini";

import Header from './components/Header';
import SubHeader from './components/Header/SubHeader';
import GoUpButton from './components/common/GoUpButton'
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/index";
import Test from "./components/Header";
import Stock from "./components/Stock";


function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <h1>Some Shop</h1>
      <p> for real</p>
      <Header/>
      <BrowserRouter><SubHeader /></BrowserRouter>
      <GoUpButton/>

      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}

      <Stock />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
