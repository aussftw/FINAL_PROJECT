import React, {Suspense} from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";

// import SearchResultsPage from "../../components/SearchResultPage";
import Preloader from "../../components/Preloader";
const SearchResultsPage = React.lazy(() =>
  import("../../components/SearchResultPage"));

function SearchPage() {
  return (
    <>
      <BackToTop />
      <Header />
      <SubHeader />
       <Suspense fallback={<Preloader />}>
       <SearchResultsPage />
       </Suspense>

      {/*<SearchResultsPage />*/}
      <Subscribe />
      <Footer />
    </>
  );
}

export default SearchPage;
