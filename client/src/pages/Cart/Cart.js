import React, { useState, useEffect } from "react";
import * as axios from "axios";

import Container from "@material-ui/core/Container";
import useStyles from "./useStyles";
import Preloader from "../../components/Preloader/Desktop";
import ProductCart from "../../components/common/ProductCart/ProductCart";

const Cart = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("/products/top")
      .then(response => {
        setProducts(response.data);
        // eslint-disable-next-line no-console
        console.log(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
      });
  }, []);

  return (
    <Container className={classes.cartContainer} maxWidth="lg">
      {!products ? (
        <Preloader />
      ) : (
        products.slice(0, 8).map(value => {
          return (
            <ProductCart
              /* eslint-disable-next-line no-underscore-dangle */
              key={value._id}
              title={value.name}
              rate={value.rate.rating}
              price={value.currentPrice}
              img={value.imageUrls[0]}
              inCart={false}
              inWishList={false}
            />
          );
        })
      )}
    </Container>
  );
};

export default Cart;
