import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import useStyles from "./useStyles";
import ItemCard from "../ItemCard/ItemCard";
import PreloaderAdaptive from "../Preloader/Adaptive";

const TopRated = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(null);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get("/products")
      .then(response => {
        setProducts(response.data);
        setPreloader(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container className={classes.topRatedContainer} maxWidth="lg">
      {preloader && PreloaderAdaptive}
      {products &&
        products.slice(0, 8).map((value, index) => {
          let result;
          switch (index) {
            case 2:
              result = { xsDown: true };
              break;
            case 3:
              result = { xsDown: true };
              break;
            case 4:
              result = { smDown: true };
              break;
            case 5:
              result = { smDown: true };
              break;
            case 6:
              result = { mdDown: true };
              break;
            case 7:
              result = { mdDown: true };
              break;
            default:
              result = {};
          }

          return (
            <Hidden
              xsDown={result.xsDown}
              smDown={result.smDown}
              mdDown={result.mdDown}
              lgDown={result.lgDown}
            >
              <ItemCard
                title={value.name
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
                rate={value.rate.rating}
                price={value.currentPrice}
                inCart={false}
                inWishList={false}
              />
            </Hidden>
          );
        })}
    </Container>
  );
};

export default TopRated;
