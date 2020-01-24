import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import Products from "../../components/Filters";

function Shop() {
  return (
    <>
      <BackToTop />
      <Header />
      <Products />
      <SubHeader />
      <AboutUsPage />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Shop;
