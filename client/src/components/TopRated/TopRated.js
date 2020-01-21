import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import useStyles from "./useStyles";
import ItemCard from "../ItemCard/ItemCard";
import Preloader from "../Preloader/Desktop";

const TopRated = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/products/top")
      .then(response => {
        setProducts(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        // console.log(err.response.data);
        console.log(err.response);
      });
  }, []);

  return (
    <Container className={classes.topRatedContainer} maxWidth="lg">
      {!products ? (
        <Preloader />
      ) : (
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
              key={value._id}
              xsDown={result.xsDown}
              smDown={result.smDown}
              mdDown={result.mdDown}
              lgDown={result.lgDown}
            >
              <ItemCard
                // key={value._id}
                title={value.name}
                rate={value.rate.rating}
                price={value.currentPrice}
                img={value.imageUrls[0]}
                inCart={false}
                inWishList={false}
                id={value._id}
              />
            </Hidden>
          );
        })
      )}
    </Container>
  );
};

export default TopRated;
