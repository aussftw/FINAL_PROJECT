import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
