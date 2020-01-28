import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import ScrollOnTop from '../../ScrollOnTop/ScrollOnTop';

const ItemDetailsPage = () => {
  return (
    <>
      <ScrollOnTop />
      <Header />
      <SubHeader />
      <ItemDetails />
      <Footer />
    </>
  );
};

export default ItemDetailsPage;
