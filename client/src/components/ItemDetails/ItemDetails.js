import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Gallery, GalleryImage } from "react-gesture-gallery";

import axios from "axios";
import { Container, Typography, Divider, Box, Link, Button, IconButton, InputBase, List, ListItem, ListItemText, Tooltip } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import StarBorder from "@material-ui/icons/StarBorder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import Rating from "@material-ui/lab/Rating";
// import QtyCounter from "../common/QtyCounter";
import PreloaderAdaptive from "../Preloader/Adaptive";

import { addItemCart } from "../../store/actions/сart";
import {
  wishlistAddItem,
  wishlistDeleteItem,
} from "../../store/actions/wishlist";

import useStyles from "./useStyles";

const ItemDetails = ({
                       wishlistAll,
                       addWishlistItem,
                       deleteWishlistItem,
                       isAuthenticated,
                       addCartItem,
                     }) => {
  const itemNo = useParams();
  const classes = useStyles();
  const [item, setItem] = useState({
    imageUrls: [],
    name: "",
    rate: { rating: 0 },
  });
  const [index, setIndex] = useState(0);
  const [preloader, setPreloader] = useState(true);
  // const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);

  useEffect(() => {
    axios
        .get(`/api/products/${itemNo.id}`)
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
  }, [itemNo.id]);

  // helpers
  const CardTooltipText = rate => {
    if (rate.rating === undefined) return "Not yet rated";
    return `Rated ${rate.rating} out of 5`;
  };

  const {
    name,
    imageUrls,
    color,
    sizes,
    rate,
    currentPrice,
    _id,
    // previousPrice,
    description,
    quantity,
  } = item;

  console.log(item);

  const addItemToCart = () => {
    addCartItem(item._id, item.itemNo);
  };

  const handleAddtemToWishlist = () => {
    if (isAuthenticated) {
      addWishlistItem(_id);
    }
  };

  const [qty, setQty] = useState(1);

  const inc = () => {
    if (qty < 99) {
      setQty(qty + 1);
    }
  };

  const dec = () => {
    if (qty > 0 && qty !== 1) {
      setQty(qty - 1);
    }
  };

  const changeQuantity = (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(+e.target.value) && e.target.value !== "0" && e.target.value !== "")  {
      setQty(+e.target.value)
    }
  };


  return (
    <Container className={classes.brandsContaier} maxWidth="lg">
      {preloader && <PreloaderAdaptive />}
      <Box className={classes.detailsHeader}>
        <Link href="/#" className={classes.linkIcon}>
          <HomeIcon style={{ fontSize: "30px", color: "black" }} />
        </Link>
        <Divider orientation="vertical" />
        <Typography variant="h6" className={classes.detailsTitle}>
          {name}
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
              />
              ))}
          </Gallery>
        </Container>
        <Box className={classes.infoContainer}>
          <Typography variant="h6" className={classes.infoTitle}>
            {name}
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
                {color}
              </Typography>
            </ListItem>
            <ListItem className={classes.root}>
              <ListItemText className={classes.infoDetail} primary="Size:" />
              <Typography className={classes.infoDetailValue}>
                {sizes}
              </Typography>
            </ListItem>
          </List>
          <Tooltip title={CardTooltipText(rate)}>
            <Box className={classes.rating}>
              <Rating
                name="size-medium"
                value={rate.rating}
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
          <Container className={classes.qty_wrapper}>
            <Typography> Qty:</Typography>
            <Box>
              <IconButton aria-label="Less" onClick={() => dec()}>
                <RemoveSharpIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                onChange={e => changeQuantity(e)}
                value={qty}
                type="tel"
                inputProps={{
                      maxLength: 2,
                      pattern: "[0-9]",
                    }}
              />
              <IconButton aria-label="More" onClick={() => inc()}>
                <AddSharpIcon />
              </IconButton>
            </Box>
          </Container>
          <Divider variant="middle" />
          <Box className={classes.buttonsBar}>
            <Button
              className={classes.actionButton}
              onClick={addItemToCart}
              disabled={!(quantity > 0)}
              variant={quantity > 0 ? "contained" : "text"}
            >
                Add to cart
            </Button>
            <Button className={classes.actionButton} aria-label="Add to wishlist" variant="contained">
              {!wishlistAll.every(el => el._id !== _id) ? (
                <FavoriteSharpIcon
                  onClick={() => deleteWishlistItem(_id)}
                />
                ) : (
                  <FavoriteBorderSharpIcon
                    onClick={handleAddtemToWishlist}
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

function mapStateToProps(state) {
  return {
    wishlistAll: state.wishlistReducer.wishlist,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps, {
  addWishlistItem: wishlistAddItem,
  deleteWishlistItem: wishlistDeleteItem,
  addCartItem: addItemCart,
})(ItemDetails);