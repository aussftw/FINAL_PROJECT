import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";

import { useParams } from "react-router-dom";

import { Gallery, GalleryImage } from "react-gesture-gallery";

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
  Tooltip,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import StarBorder from "@material-ui/icons/StarBorder";

import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import Rating from "@material-ui/lab/Rating";
import QtyCounter from "../common/QtyCounter";
import PreloaderAdaptive from "../Preloader/Adaptive";

import useStyles from "./useStyles";

// eslint-disable-next-line
const ItemDetails = ({ id, inCart, inWishList }) => {
  const itemNo = useParams();
  const classes = useStyles();
  const [item, setItem] = useState({
    imageUrls: [],
    name: "",
    rate: { rating: 0 },
  });
  const [index, setIndex] = useState(0);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/products/${itemNo.id}`)
      .then(response => {
        setItem(response.data);
        setPreloader(false);
        // eslint-disable-next-line
        // console.log(response.data);
      })

      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }, [itemNo]);

  // helpers

  // eslint-disable-next-line
  const CardTooltipText = rating => {
    if (item.rate.rating === undefined) return "Not yet rated";
    return `Rated ${item.rating} out of 5`;
  };

  const upperName = string => {
    return string
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const {
    name,
    imageUrls,

    color,
    sizes,
    rate,
    currentPrice,
    // eslint-disable-next-line
    //  _id,
    // previousPrice,
    description,
  } = item;

  const title = upperName(name);

  return (
    <Container className={classes.brandsContaier} maxWidth="lg">
      {preloader && PreloaderAdaptive}
      <Box className={classes.detailsHeader}>
        <Link href="/#" className={classes.linkIcon}>
          <HomeIcon style={{ fontSize: "30px", color: "black" }} />
        </Link>
        <Divider orientation="vertical" />
        <Typography variant="h6" className={classes.detailsTitle}>
          {title}
        </Typography>
      </Box>
      <Box className={classes.detailsBody}>
        <Container maxWidth={false} className={classes.imagesContainer}>
          <Gallery
            index={index}
            onRequestChange={i => {
              setIndex(i);
            }}
          >
            {imageUrls.map(image => (
              <GalleryImage
                key={index}
                objectFit="contain"
                src={image}
                alt="flower_picture"
                // className={classes.imgScale}
              />
            ))}
          </Gallery>
        </Container>
        <Box className={classes.infoContainer}>
          <Typography variant="h6" className={classes.infoTitle}>
            {title}
          </Typography>
          <Divider variant="middle" />
          <List>
            {/* <ListItem className={classes.root}>
              <ListItemText
                className={classes.infoDetail}
                primary="Product code:"
              />
              <Typography className={classes.infoDetailValue}>{_id}</Typography>
            </ListItem> */}
            <ListItem className={classes.root}>
              <ListItemText className={classes.infoDetail} primary="Color:" />
              <Typography className={classes.infoDetailValue}>
                {/* eslint-disable-next-line */}
                {color}
              </Typography>
            </ListItem>
            <ListItem className={classes.root}>
              <ListItemText className={classes.infoDetail} primary="Size:" />
              <Typography className={classes.infoDetailValue}>
                {/* eslint-disable-next-line */}
                {sizes}
              </Typography>
            </ListItem>
          </List>
          <Tooltip title={CardTooltipText(rate)}>
            <Box className={classes.rating}>
              <Rating
                name="size-medium"
                value={rate}
                size="medium"
                precision={0.5}
                emptyIcon={
                  <StarBorder color="primary" style={{ fontSize: 24 }} />
                }
              />
            </Box>
          </Tooltip>
          <Divider variant="middle" />
          <List>
            {/* <ListItem className={classes.root}>
              <ListItemText primary="Price:" className={classes.infoDetail} />
              <Typography className={classes.previousPrice}>
                {previousPrice}$
              </Typography>
            </ListItem> */}
            <ListItem className={classes.root}>
              <ListItemText primary="Price:" className={classes.infoDetail} />
              <Typography className={classes.currentPrice}>
                {/* eslint-disable-next-line */}
                {currentPrice}$
              </Typography>
            </ListItem>
          </List>
          <Divider variant="middle" />
          <QtyCounter />
          <Divider variant="middle" />
          <Box className={classes.buttonsBar}>
            <Button
              className={classes.actionButton}
              // eslint-disable-next-line
              onClick={console.log("add to cart function here")}
              variant="contained"
            >
              {inCart ? "Remove from cart" : "Add to cart"}
            </Button>
            <Button aria-label="Add to wishlist" variant="contained">
              {inWishList ? (
                <FavoriteSharpIcon
                  // eslint-disable-next-line
                  onClick={console.log("add to wishlist function here")}
                />
              ) : (
                <FavoriteBorderSharpIcon
                  // eslint-disable-next-line
                  onClick={console.log("add to wishlist function here")}
                />
              )}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={classes.detailsDescription}>
        <span className={classes.descriptionTitle}>Description: </span>
        {/* eslint-disable-next-line */}
        <Typography className={classes.descriptionText}>
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default ItemDetails;
