import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import LastViewCarousel from "../../components/LastView";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const ItemDetailsPage = () => {
  return (
    <>
      <ScrollOnTop />
      <Header />
      <SubHeader />
      <ItemDetails />
      <LastViewCarousel />
      <Footer />
    </>
  );
};

export default ItemDetailsPage;
