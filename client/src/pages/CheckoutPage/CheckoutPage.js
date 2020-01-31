import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import Checkout from "../../components/Checkout/Checkout";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const CheckoutPage = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <Checkout />
      <Footer />
    </>
  );
};

export default CheckoutPage;
