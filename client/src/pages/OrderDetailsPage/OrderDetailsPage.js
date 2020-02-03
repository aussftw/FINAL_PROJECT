import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const OrderDetailsPage = () => {
  return (
    <>
      <ScrollOnTop />
      <Header />
      <SubHeader />
      <OrderDetails />
      <Footer />
    </>
  );
};

export default OrderDetailsPage;
