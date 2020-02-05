import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import AboutUs from "../../components/AboutUs/AboutUs";
import ScrollOnTop from "../../components/common/ScrollOnTop/ScrollOnTop";

function Shop() {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <AboutUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Shop;
