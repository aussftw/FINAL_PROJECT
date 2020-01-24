import React, { useEffect, useState } from "react";
import * as axios from "axios";
import InfiniteCarousel from "react-leaf-carousel";

import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Preloader from "../Preloader/Desktop";

const ProductCarousel = () => {
  // const classes = useStyles();
  const [productsV, setProductsV] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products/top")
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
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          slidesSpacing={1}
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
