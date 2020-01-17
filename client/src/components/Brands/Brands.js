import React, { useState, useEffect } from "react";

import axios from "axios";

// import { Gallery, GalleryImage } from "react-gesture-gallery";

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
      .get("/partners")
      .then(response => {
        setBrands(response.data);
        setPreloader(false);
      })
      .catch(err => {
        // eslint-disable-next-line
        console.log(err);
      });
  }, []);

  // eslint-disable-next-line
  const { _id, url } = brands;

  return (
    <Container className={classes.brandsContaier}>
      {brands.length === 0 ? (
        <PreloaderAdaptive />
      ) : (
        brands.map(brand => (
          <Link href={url}>
            <Box
              key={_id} // fix key error
              className={classes.brand}
              style={{
                backgroundImage: `url(${brand.imageUrl})`,
              }}
            />
          </Link>
        ))
      )}
    </Container>
  );
};

export default Brands;
