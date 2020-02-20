import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Gallery, GalleryImage } from "react-gesture-gallery";

import axios from "axios";
import {
  Container,
  Typography,
  Divider,
  Box,
  Link,
  Button,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/HomeSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import Tooltip from "@material-ui/core/Tooltip";
import SnackBar from "../common/SnackBar/SnackBar";
import RatingModule from "../common/RatingModule/RatingModule";
import PreloaderAdaptive from "../Preloader/Adaptive";
import ItemTabs from "../common/ItemTabs/ItemTabs";

import {
  addItemCart,
  changeItemCartQuantityFromItemDetails,
} from "../../store/actions/сart";
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
  updateCart,
}) => {
  const itemNo = useParams();
  const classes = useStyles();
  const [item, setItem] = useState({
    imageUrls: [],
    name: "",
    rate: { rating: 0 },
    currentPrice: 0,
  });
  const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);
  const [index, setIndex] = useState(0);
  const [preloader, setPreloader] = useState(true);
  const [qty, setQty] = useState(1);
  const history = useHistory();

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    axios
      .get(`/api/products/${itemNo.id}`, { cancelToken: source.token })
      .then(response => {
        setItem(response.data);
        setPreloader(false);
      })
      .catch(error => {
        history.push("/notfound");
        console.log(error);
      });

    return () => {
      source.cancel();
      setIndex(0);
    };
  }, [history, itemNo.id]);

  // helpers

  const {
    name,
    imageUrls,
    color,
    sizes,
    currentPrice,
    previousPrice,
    _id,
    quantity,
  } = item;

  const addItemToCart = () => {
    if (qty === 1) {
      addCartItem(item._id, item.itemNo);
    } else {
      updateCart(item._id, qty, item);
    }
    setSnackbarAddToCart(true);
  };

  const handleAddtemToWishlist = () => {
    if (isAuthenticated) {
      addWishlistItem(_id);
    }
  };

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

  const changeQuantity = e => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(+e.target.value) && e.target.value !== "0" && e.target.value !== "") {
      setQty(+e.target.value);
    }
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarAddToCart(false);
  };

  return preloader ? (
    <PreloaderAdaptive />
  ) : (
    <Container className={classes.brandsContaier} maxWidth="lg">
      <SnackBar open={snackbarAddToCart} close={snackbarClose} text="Added to your shopping cart!" />
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
                className={classes.imgScale}
              />
            ))}
          </Gallery>
        </Container>
        <Box className={classes.infoContainer}>
          <Typography variant="h6" className={classes.infoTitle}>
            {name}
          </Typography>
          <Divider />
          <List>
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
            <ListItem className={classes.root} style={{ paddingTop: 0 }}>
              <ListItemText className={classes.infoDetail} primary="Rating:" />
              <RatingModule id={item._id} rate={item.rate.rating} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem className={classes.root}>
              <ListItemText primary="Price:" className={classes.infoDetail} />
              <Typography className={classes.currentPrice}>
                {`$${currentPrice.toFixed(2)}`}
              </Typography>
            </ListItem>
            {previousPrice ? (
              <ListItem className={classes.root}>
                <ListItemText
                  primary="Old price:"
                  className={classes.infoDetail}
                />
                <Typography className={classes.oldPrice}>
                  <s>{`$${previousPrice.toFixed(2)}`}</s>
                </Typography>
              </ListItem>
            ) : null}
          </List>
          <Divider />
          <Container className={classes.qty_wrapper}>
            <Typography className={classes.qty_text}>Quantity:</Typography>
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
          <Divider />
          <Box className={classes.buttonsBar}>
            { quantity > 0 ? (
              <Button
                className={classes.actionButton}
                onClick={addItemToCart}
                variant={quantity > 0 ? "contained" : "text"}
              >
              Add to cart
              </Button>
            ) : (
              <Button
                className={classes.actionButton}
                onClick={addItemToCart}
                disabled
                variant={quantity > 0 ? "contained" : "text"}
              >
                  Out of stock
              </Button>
            )}
            {!wishlistAll.every(el => el._id !== _id) ? (
              <Tooltip arrow title="Remove from wishlist">
                <Button
                  className={classes.actionButton}
                  aria-label="Add to wishlist"
                  variant="contained"
                  onClick={() => deleteWishlistItem(_id)}
                >
                  <FavoriteSharpIcon />
                </Button>
              </Tooltip>
            ) : (
              <Tooltip
                arrow
                title={
                  isAuthenticated
                    ? "Add to wishlist"
                    : "Only for authorized users"
                }
              >
                <Button
                  className={classes.actionButton}
                  aria-label="Add to wishlist"
                  variant="contained"
                  onClick={handleAddtemToWishlist}
                >
                  <FavoriteBorderSharpIcon />
                </Button>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Box>
      <ItemTabs description={item.description} id={item._id} />
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
  updateCart: changeItemCartQuantityFromItemDetails,
})(ItemDetails);
