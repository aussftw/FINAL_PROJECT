import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Container,
  Typography,
  Divider,
  Box,
  Link,
  Button,
  IconButton,
} from "@material-ui/core";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
// import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import QtyCounter from "../common/QtyCounter";
import PreloaderAdaptive from "../Preloader/Adaptive";

import useStyles from "./useStyles";

const ItemDetails = () => {
  const classes = useStyles();
  const [item, setItem] = useState([]);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get("/products/5269")
      .then(response => {
        setItem(response.data);
        setPreloader(false);
        // eslint-disable-next-line
        console.log(response.data);
      })

      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }, [item.name]);

  // .split(" ")
  // .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  // .join(" ")

  return (
    <Container className={classes.brandsContaier} maxWidth="lg">
      {preloader && PreloaderAdaptive}
      <Box>
        <Link href="/#">
          <HomeSharpIcon />
        </Link>
        <Typography variant="h6" color="secondary.dark">
          {item.name}
        </Typography>
      </Box>
      <Box className={classes.detailsBody}>
        <Box className={classes.imagesContainer}>
          <img src="" alt="" />
        </Box>
        <Box className={classes.infoContainer}>
          <Typography variant="h4" color="secondary.dark">
            {item.name}
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" color="secondary.dark">
            Product code:
            {/* eslint-disable-next-line */}
            {item._id}
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            Color:
            {item.color}
          </Typography>
          <Typography variant="h6" color="secondary.dark">
            Size:
            {item.sizes}
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h5" color="secondary.dark">
            Price:
            {/* eslint-disable-next-line */}
            {item.previousPrice}$
          </Typography>
          <Typography variant="h5" color="secondary.dark">
            Price:
            {/* eslint-disable-next-line */}
            {item.currentPrice}$
          </Typography>
          <Divider variant="middle" />
          <QtyCounter />
          <Divider variant="middle" />
          <Box className={classes.buttonBar}>
            <Button
              lassName={classes.actionButton}
              onClick="add to cart function here"
              variant="contained"
            >
              Add to cart
            </Button>
            <IconButton color="" aria-label="Add to wishlist">
              <FavoriteBorderSharpIcon
                onClick={console.log("add to wishlist function here")}
              />
            </IconButton>
          </Box>
          <Divider variant="middle" />
        </Box>
      </Box>
      <Box className={classes.detailsDescription}>
        <Typography>
          Description:
          {/* eslint-disable-next-line */}
          {item.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default ItemDetails;
