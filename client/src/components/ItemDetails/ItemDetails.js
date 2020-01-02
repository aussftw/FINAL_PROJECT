import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  Container,
  Typography,
  Divider,
  Box,
  Link,
  Button,
  List,
  ListItem,
  ListItemText,
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
      <Box className={classes.detailsHeader}>
        <Link href="/#" className={classes.linkIcon}>
          <HomeSharpIcon className={classes.icon} fontSize="large" />
        </Link>
        <Divider orientation="vertical" />
        <Typography
          variant="h6"
          color="secondary.dark"
          className={classes.detailsTitle}
        >
          {item.name}
        </Typography>
      </Box>
      <Box className={classes.detailsBody}>
        <Box className={classes.imagesContainer}>
          <img src="" alt="" />
        </Box>
        <Box className={classes.infoContainer}>
          <Typography
            variant="h6"
            color="secondary.dark"
            className={classes.infoTitle}
          >
            {item.name}
          </Typography>
          <Divider variant="middle" />
          <List>
            <ListItem className={classes.root}>
              <ListItemText
                className={classes.infoDetail}
                color="secondary.dark"
                primary="Product code:"
              />
              <Typography className={classes.infoDetailValue}>
                {/* eslint-disable-next-line */}
                {item._id}
              </Typography>
            </ListItem>
            <ListItem className={classes.root}>
              <ListItemText
                className={classes.infoDetail}
                color="secondary.dark"
                primary="Color:"
              />
              <Typography className={classes.infoDetailValue}>
                {/* eslint-disable-next-line */}
                {item.color}
              </Typography>
            </ListItem>
            <ListItem className={classes.root}>
              <ListItemText
                className={classes.infoDetail}
                color="secondary.dark"
                primary="Size:"
              />
              <Typography className={classes.infoDetailValue}>
                {/* eslint-disable-next-line */}
                {item.sizes}
              </Typography>
            </ListItem>
          </List>

          <Divider variant="middle" />

          <List>
            <ListItem className={classes.root}>
              <ListItemText primary="Price:" className={classes.infoDetail}>
                Price:
              </ListItemText>
              <Typography
                color="secondary.dark"
                className={classes.previousPrice}
              >
                {/* eslint-disable-next-line */}
                {item.previousPrice}$
              </Typography>
            </ListItem>
            <ListItem className={classes.root}>
              <ListItemText primary="Price:" className={classes.infoDetail}>
                Price:
              </ListItemText>
              <Typography
                color="secondary.dark"
                className={classes.currentPrice}
              >
                {/* eslint-disable-next-line */}
                {item.currentPrice}$
              </Typography>
            </ListItem>
          </List>
          <Divider variant="middle" />
          <QtyCounter />
          <Divider variant="middle" />
          <Box className={classes.buttonsBar}>
            <Button
              className={classes.actionButton}
              onClick="add to cart function here"
              variant="contained"
            >
              Add to cart
            </Button>
            <Button color="" aria-label="Add to wishlist" variant="contained">
              <FavoriteBorderSharpIcon
                onClick={console.log("add to wishlist function here")}
              />
            </Button>
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
