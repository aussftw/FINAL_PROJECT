import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import FilterByCategory from "./FilterByCategory";
import ItemCard from "../ItemCard/ItemCard";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import useStyles from "./useStyles";

const Filters = () => {
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
    <>
      <Container className={classes.container}>
        <div>
          <FilterByCategory />
          <FilterByColor />
          <FilterByPrice />
        </div>
        <div>
          {preloader}
          {products &&
            products.map(value => {
              return (
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
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Filters;
