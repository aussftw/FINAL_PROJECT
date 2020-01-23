import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import axios from "axios";
import useStyles from "../../components/SearchResultPage/useStyles";
// import ItemCard from "../../components/ItemCard/ItemCard";

const AboutUsPage = () => {
  const classes = useStyles();

  // const [products, setProducts] = useState([]);
  //
  // const Change = prop  => {
  //   setProducts( {products: prop});
  // };

  useEffect(() => {
    axios
      .get(`/api/products/filter?categories=Palms`)
      .then(() => {
        // console.log(product.data.products);
        // Change(product.data.products)
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
    // axios
    //   .get("/api/products")
    //   .then(products => {
    //     console.log(products);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // eslint-disable-next-line
  }, []);

  return (
    <Container className={classes.container} maxWidth="xl">
      {/* <p>{products}</p> */}
      <>
        {/* {searchResult.searchResult.map(product => { */}
        {/*  return ( */}
        {/*    <ItemCard */}
        {/*      key={product._id} */}
        {/*      title={product.name} */}
        {/*      rate={product.rate.rating} */}
        {/*      price={product.currentPrice} */}
        {/*      img={product.imageUrls[0]} */}
        {/*      inCart={false} */}
        {/*      inWishList={false} */}
        {/*    /> */}
        {/*  ); */}
        {/* })} */}
      </>
    </Container>
  );
};

export default AboutUsPage;
