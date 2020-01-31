import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NotFound from "../../components/NotFound";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const ItemDetailsPage = () => {
  return (
    <>
      <ScrollOnTop />
      <Header />
      <SubHeader />
      <NotFound />
      <Footer />
    </>
  );
};

export default ItemDetailsPage;
