import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile/Profile";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const Profiler = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <Profile />
      <Footer />
    </>
  );
};

export default Profiler;
