import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import SubHeader from "../../components/Header/SubHeader";

const ItemDetailsPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <ItemDetails />
      <Footer />
    </>
  );
};

export default ItemDetailsPage;
