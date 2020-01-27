import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Filters from "../../components/Filters";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import LastViewCarousel from "../../components/LastView"

function Shop() {

  return (
    <div>
      <>
        <BackToTop />
        <Header />
        <SubHeader />
        <Filters />
<LastViewCarousel />
        <Subscribe />
        <Footer /> 
      </>
    </div>
  );
}

export default Shop;
