import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import Products from "../../components/Filters";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';
import LastViewCarousel from "../../components/LastView"

function Shop() {

  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <Products />
      <LastViewCarousel />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Shop;
