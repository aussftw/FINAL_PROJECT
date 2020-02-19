import React, { useState, useEffect, useCallback } from "react";
import * as axios from "axios";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./useStyles";

import ItemCard from "../ItemCard/ItemCard";

const TopRated = () => {
  const classes = useStyles();

  const calcHide = index => {
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
    return result;
  };

  function SkeletonGenerator() {
    const query = [0, 1, 2, 3, 4, 5, 6, 7];
    const skeletons = query.map((value, index) => {
      const hidePoint = calcHide(index);

      return <ItemCard key={`skeleton-${value}`} hidden={hidePoint} />;
    });

    return skeletons;
  }

  const [products, setProducts] = useState(SkeletonGenerator());

  const cardsGenerator = useCallback(data => {
    const query = data.slice(0, 8).map((value, index) => {
      const hidePoint = calcHide(index);

      return (
        <ItemCard
          key={`card-${value._id}`}
          id={value._id}
          itemNo={value.itemNo}
          title={value.name}
          rate={value.rate.rating}
          price={value.currentPrice}
          oldPrice={value.previousPrice}
          img={value.imageUrls[0]}
          stock={value.quantity}
          hidden={hidePoint}
        />
      );
    });
    setProducts(query);
  }, []);

  useEffect(() => {
    axios
      .get("/api/products/top")
      .then(response => {
        cardsGenerator(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  }, [cardsGenerator]);

  return (
    <>
      <Typography variant="h4" component="h2">
        Top rated
      </Typography>
      <Container className={classes.topRatedContainer} maxWidth="lg">
        {products}
      </Container>
    </>
  );
};

export default TopRated;
