import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart/Cart";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';


const CartPage = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
