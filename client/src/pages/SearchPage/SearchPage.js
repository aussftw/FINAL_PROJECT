import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import SearchResultsPage from "../../components/SearchResultPage";

function SearchPage() {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
      <SearchResultsPage />
      <Subscribe />
      <Footer />
    </>
  );
}

export default SearchPage;
