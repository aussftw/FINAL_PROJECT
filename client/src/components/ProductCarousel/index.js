import React, { useEffect, useState } from "react";
import * as axios from "axios";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";
import Preloader from "../Preloader/Desktop";

const ProductCarousel = () => {
  const classes = useStyles();
  const [productsV, setProductsV] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products/top")
      .then(response => {
        setProductsV(response.data);
        console.log("CAROUSEL", response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <h2 className={classes.title}>Our TOP products</h2>
      {!productsV ? (
        <Preloader />
      ) : (
        <AliceCarousel
          responsive={{
            960: {
              items: 2,
            },
            1280: {
              items: 4,
            },
            1960: {
              items: 4,
            },
          }}
          buttonsDisabled={true}
          autoPlay={true}
          autoPlayInterval={1800}
          duration={600}
        >
          {productsV.slice(0, 8).map(value => {
            return (
              <ItemCard
                id={value._id}
                itemNo={value.itemNo}
                title={value.name}
                rate={value.rate.rating}
                price={value.currentPrice}
                img={value.imageUrls[0]}
                stock={value.quantity}
              />
            );
          })}
        </AliceCarousel>
      )}
    </Container>
  );
};

export default ProductCarousel;
