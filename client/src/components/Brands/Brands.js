 import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Link, Box } from "@material-ui/core";
import PreloaderAdaptive from "../Preloader/Adaptive";
import useStyles from "./useStyles";

const Brands = () => {
  const classes = useStyles();
  const [brands, setBrands] = useState([]);
  // eslint-disable-next-line
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get("/api/partners")
      .then(response => {
        setBrands(response.data);
        setPreloader(false);
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, []);

  return (
    <Container className={classes.brandsContaier} maxWidth="xl">
      {brands.length === 0 ? (
        <PreloaderAdaptive />
      ) : (
        brands.map(brand => (
          <Link href={brand.url} target="_blank" rel="noopener" key={brand._id}>
            <Box>
              <img
                src={`${brand.imageUrl}`}
                alt={`${brand.name}`}
                className={classes.brand}
              />
            </Box>
          </Link>
        ))
      )}
    </Container>
  );
};

export default Brands;
