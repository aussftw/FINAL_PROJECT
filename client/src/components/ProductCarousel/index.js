import React, { useEffect, useState } from "react";
import * as axios from "axios";

import Typography from "@material-ui/core/Typography";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Container from "@material-ui/core/Container";
import ItemCard from "../ItemCard/ItemCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import useStyles from "./useStyles";
import PreloaderAdaptive from "../Preloader/Adaptive";


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
        <Typography variant="h3">Our TOP products</Typography>
        {!productsV ? (
          <PreloaderAdaptive />
            ) : (
              <AliceCarousel
                responsive={
                        {
                            600: {
                                items: 2,
                            },
                            960: {
                                items: 3,
                            },
                            1280: {
                                items: 4
                            },

                        }
                    }
                buttonsDisabled
                autoPlay
                autoPlayInterval={1800}
                duration={600}
              >
                {productsV.slice(0, 8).map(value => {
                        return (
                          <ItemCard
                              key={`product-carousel-${value._id}`}
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
