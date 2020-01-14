import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile/Profile";

const Profiler = () => {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <Profile />
      <Footer />
    </>
  );
};

export default Profiler;
