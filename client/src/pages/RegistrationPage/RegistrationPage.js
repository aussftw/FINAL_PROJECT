import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import RegistrationForm from '../../components/RegistrationForm';
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';

const RegistrationPage = () => {
  return (
    <>
      <ScrollOnTop />
      <BackToTop />
      <Header />
      <SubHeader />
      <RegistrationForm />
      <Footer />
    </>
  );
};

export default RegistrationPage;
