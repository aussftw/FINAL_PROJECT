import React from "react";
import BackToTop from "../../components/common/GoUpButton";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import Footer from "../../components/Footer";
import ScrollOnTop from '../../components/common/ScrollOnTop/ScrollOnTop';
import AdminProducts from "../../components/AdminProducts/AdminProducts";


const AdminPage = () => {
    return (
      <>
        <ScrollOnTop />
        <BackToTop />
        <Header />
        <SubHeader />
        <AdminProducts />
        <Footer />
      </>
    );
};

export default AdminPage;