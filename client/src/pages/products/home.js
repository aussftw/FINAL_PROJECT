import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import FilterByCategory from "../../components/Filters";

import MainButton from "../../components/common/buttons/MainButton";
import CartMini from "../../components/Header/CartMini/CartMini";
import TopRated from "../../components/TopRated/TopRated";

import HomePage from "../../components/HomePage/HomePage";

import Brands from "../../components/Brands/Brands";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import FilterByColor from "../../components/Filters/FilterByColor";
import Footer from "../../components/Footer/index";
// import Stock from "./components/Stock";
import Subscribe from "../../components/Subscribe/Subscribe";
import Navigation from "../../views/Navigation/Navigation";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <h1>Some Shop</h1>
      <TopRated />
      <p> for real</p>
      <Navigation />
      <HomePage />
      <Header />
      <BrowserRouter>
        <SubHeader />
      </BrowserRouter>

      <MainButton text="BlaBla" onClick={() => setClicked(!clicked)} />
      {clicked ? <CartMini /> : null}
      {/* eslint-disable-next-line */}
      {/* <Stock /> */}
      <Brands />
      <Subscribe />
      <Footer />
      <FilterByCategory />
      <BackToTop />
      <FilterByColor />
    </>
  );
};

export default Home;
