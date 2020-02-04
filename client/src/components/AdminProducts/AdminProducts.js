import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import * as axios from "axios";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import useStyles from "./useStyles";
import PreloaderAdaptive from "../Preloader/Adaptive";

const AdminProducts = () => {
  const classes = useStyles();
  const [getStarted, setGetStarted] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [allLoaded, setAllLoaded] = useState(false);

  const columns = [
    { title: 'Product Name', field: 'name', type: 'string' },
    { title: 'Enabled', field: 'enabled', type: 'boolean' },
    { title: 'Price', field: 'currentPrice', type: 'numeric' },
    { title: 'Quantity', field: 'quantity', type: 'numeric' },
    { title: 'Category', field: 'categories', type: 'string' },
    { title: 'Color', field: 'color', type: 'string' },
    { title: 'Size', field: 'sizes', type: 'string' },
    { title: 'Date', field: 'date', type: 'date' },
    { title: 'Image urls', field: 'imageUrls', type: 'string' },
    { title: 'Product url', field: 'productUrl', type: 'string' },
  ];

  const getProducts = () => {
    axios
      .get("/api/products")
      .then(response => {
        setAllProducts(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  const getCategories = () => {
    axios
      .get("/api/catalog")
      .then(response => {
        setCategories(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  const getColors = () => {
    axios
      .get("/api/colors")
      .then(response => {
        setColors(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  const getSizes = () => {
    axios
      .get("/api/sizes")
      .then(response => {
        setSizes(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (
      allLoaded === false &&
      allProducts.length !== 0 &&
      categories.length !== 0 &&
      colors.length !== 0 &&
      sizes.length !== 0
    ) {
      setAllLoaded(true);
      console.log("allProducts: ", allProducts);
      console.log("categories: ", categories);
      console.log("colors: ", colors);
      console.log("sizes: ", sizes);
    }
  }, [allLoaded, allProducts, categories, colors, sizes]);

  const getAllHandler = () => {
    setAllLoaded(false);
    setGetStarted(true);
    getProducts();
    getCategories();
    getColors();
    getSizes();
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h3" style={{ cursor: "default" }}>
        Admin Page
      </Typography>
      <Button variant="contained" onClick={getAllHandler}>
        Get all products and parameters
      </Button>
      {getStarted && (
        <>
          {!allLoaded ? (
            <PreloaderAdaptive />
          ) : (
            <MaterialTable
              columns={columns}
              data={allProducts}
              title="Products"
            />
          )}
        </>
      )}
    </Container>
  );
};

export default AdminProducts;
