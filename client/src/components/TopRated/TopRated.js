import React from "react";

import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import useStyles from "./useStyles";
import ItemCard from "../ItemCard/ItemCard";

const TopRated = () => {
  const classes = useStyles();
  const hardCodeArray = [
    {
      title: "1 Exercitat Virginia",
      value: 3.675698,
      price: 38,
      inCart: false,
      inWishList: false,
    },
    {
      title: "2 Exercitat Virginia",
      price: 38,
      value: 3.675698,
      inCart: false,
      inWishList: true,
    },
    {
      title: "3 Exercitat Virginia",
      price: 38,
      inCart: false,
      inWishList: true,
    },
    {
      title: "4 Exercitat Virginia",
      value: 3.675698,
      price: 38,
      inCart: true,
      inWishList: false,
    },
    {
      title: "5 Exercitat Virginia",
      price: 38,
      value: 3.675698,
      inCart: false,
      inWishList: false,
    },
    {
      title: "6 Exercitat Virginia",
      price: 38,
      inCart: false,
      inWishList: true,
    },
    {
      title: "7 Exercitat Virginia",
      value: 3.675698,
      price: 38,
      inCart: false,
      inWishList: false,
    },
    {
      title: "8 Exercitat Virginia",
      price: 38,
      value: 3.675698,
      inCart: false,
      inWishList: false,
    },
    {
      title: "9 Exercitat Virginia",
      price: 38,
      inCart: false,
      inWishList: true,
    },
  ];

  return (
    <Container className={classes.topRatedContainer} maxWidth="xl">
      {hardCodeArray.slice(0, 8).map((value, index) => {
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
          >
            <ItemCard
              title={value.title}
              value={value.value}
              price={value.price}
              inCart={value.inCart}
              inWishList={value.inWishList}
            />
          </Hidden>
        );
      })}
    </Container>
  );
};

export default TopRated;
