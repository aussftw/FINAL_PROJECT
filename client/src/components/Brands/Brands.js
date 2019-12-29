import React, { useState, useEffect } from "react";

import axios from "axios";
import { Container, Link, Box } from "@material-ui/core";
import PreloaderAdaptive from "../Preloader/Adaptive";
import useStyles from "./useStyles";

const Brands = () => {
  const classes = useStyles();

  const [brands, setBrands] = useState([]);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get("/partners")
      .then(response => {
        setBrands(response.data);
        setPreloader(false);
        // eslint-disable-next-line
        console.log(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, []);

  return (
    <Container className={classes.brandsContaier} maxWidth="lg">
      {preloader && PreloaderAdaptive}
      {brands.map(brand => (
        <Link href={brands.url} key={brand.customId}>
          <Box
            className={classes.brand}
            style={{
              backgroundImage: `url(${brand.imageUrl})`,
            }}
          />
        </Link>
      ))}
    </Container>
  );
};

export default Brands;
