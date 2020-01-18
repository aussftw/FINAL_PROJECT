import React, { useEffect, useState } from "react";
import * as axios from "axios";
import InfiniteCarousel from "react-leaf-carousel";
// import useStyles from "../ProductCarousel/useStyles";
import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import useStyles from "../TopRated/useStyles";

import Preloader from "../Preloader/Desktop";
// import Hidden from "@material-ui/core/Hidden";

const ProductCarousel = () => {
  // const classes = useStyles();
  const [productsV, setProductsV] = useState(null);

  useEffect(() => {
    axios
      .get("/products/top")
      .then(response => {
        setProductsV(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      {!productsV ? (
        <Preloader />
      ) : (
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          // dots
          // arrows={false}
          showSides={false}
          // sidesOpacity={.5}
          sideSize={1.9}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice
        >
          {productsV.slice(0, 8).map(value => {
            return (
              <ItemCard
                title={value.name
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                rate={value.rate.rating}
                price={value.currentPrice}
                img={value.imageUrls[0]}
                inCart={false}
                inWishList={false}
              />
            );
          })}
        </InfiniteCarousel>
      )}
    </Container>
  );
};

export default ProductCarousel;
