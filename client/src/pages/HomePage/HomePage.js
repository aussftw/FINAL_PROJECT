import React from "react";
import TopRated from "../../components/TopRated/TopRated";

import TilesContainer from "../../components/TilesContainer/TilesContainer";
import Brands from "../../components/Brands/Brands";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";

import Stock from "../../components/Stock";
import Subscribe from "../../components/Subscribe/Subscribe";
import Navigation from "../../views/Navigation/Navigation";

function HomePage() {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <TopRated />
      <TilesContainer />
      <Stock />
      <Brands />
      <Subscribe />
      <Footer />
      <Navigation />
    </>
  );
}

export default HomePage;
