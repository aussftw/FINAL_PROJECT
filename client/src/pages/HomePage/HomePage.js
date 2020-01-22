import React from "react";
import TopRated from "../../components/TopRated/TopRated";

import TilesContainer from "../../components/TilesContainer/TilesContainer";
import Brands from "../../components/Brands/Brands";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
// import ItemDetails from "../../components/ItemDetails/ItemDetails";
import Stock from "../../components/Stock";
import MainCarousel from "../../components/MainCarousel";
import Subscribe from "../../components/Subscribe/Subscribe";

function HomePage() {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <MainCarousel />
      <TopRated />
      <TilesContainer />
      <Stock />
      <Brands />
      <Subscribe />
      <Footer />
    </>
  );
}

export default HomePage;
