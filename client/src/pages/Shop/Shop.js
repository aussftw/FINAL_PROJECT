import React from "react";
// {Suspense }
// import axios from "axios";
import Header from "../../components/Header";
import SubHeader from "../../components/Header/SubHeader/SubHeader";
import BackToTop from "../../components/common/GoUpButton";
// import Footer from "../../components/Footer";
// import Subscribe from "../../components/Subscribe/Subscribe";
// import AboutUsPage from "../AboutUsPage/AboutUsPage";
//  import Preloader from "../../components/Preloader";

function Shop() {
  // const AboutUsPage = React.lazy(() => import('../AboutUsPage/AboutUsPage')); // Lazy-loaded
  /*  const [arr, setArr] = useState([]);

useEffect(()=>{
  axios
    .get(`/api/products`)
    .then(product => {
      setArr(...arr, product.data);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
    });

}, []) */

  return (
    <div>
      {/* {arr.length>0 ?( */}
      <>
        <BackToTop />
        <Header />
        <SubHeader />

        {/* <Suspense fallback={<Preloader />}> */}
        {/*  <AboutUsPage /> */}
        {/* </Suspense> */}

        {/* <AboutUsPage /> */}
        {/* <Subscribe /> */}
        {/* <Footer /> */}
      </>
      {/* ):( */}
      {/* null */}
      {/* )} */}
    </div>
  );
}

export default Shop;
