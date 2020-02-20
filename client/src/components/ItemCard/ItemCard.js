import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Rating from "@material-ui/lab/Rating";
import Skeleton from "@material-ui/lab/Skeleton";
import { Hidden } from "@material-ui/core";

import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import StarBorder from "@material-ui/icons/StarBorder";

import SnackBar from "../common/SnackBar/SnackBar";
import useStyles from "./useStyles";

import { addItemCart } from "../../store/actions/сart";
import {
  wishlistAddItem,
  wishlistDeleteItem,
} from "../../store/actions/wishlist";
import { addToLastView } from "../../store/actions/addToLastView";

const ItemCard = ({
  id,
  itemNo,
  title,
  rate,
  oldPrice = null,
  price,
  img,
  stock,
  hidden = {},
  addCartItem,
  wishlistAll,
  addWishlistItem,
  deleteWishlistItem,
  isAuthenticated,
  addToLastViewCard,
}) => {
  const classes = useStyles();
  const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);

  const CardTooltipText = value => {
    if (value === undefined || value === 0) return "not yet rated";

    return `rated ${value.toFixed(2)} out of 5`;
  };

  const addItemToCart = () => {
    addCartItem(id, itemNo);
    setSnackbarAddToCart(true);
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarAddToCart(false);
  };

  const handleAddItemToWishlist = () => {
    if (isAuthenticated) {
      addWishlistItem(id);
    }
  };

  return (
    <Hidden
      xsDown={hidden.xsDown}
      smDown={hidden.smDown}
      mdDown={hidden.mdDown}
    >
      {id ? (
        <Card className={classes.card}>
          {wishlistAll.some(el => el._id === id) ? (
            <Tooltip arrow title="Remove from wishlist">
              <IconButton
                className={classes.wishList}
                onClick={() => deleteWishlistItem(id)}
              >
                <Favorite />
              </IconButton>
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
              <IconButton
                className={classes.wishList}
                onClick={handleAddItemToWishlist}
              >
                <FavoriteBorder />
              </IconButton>
            </Tooltip>
          )}
          <Link className={classes.link} to={`/products/${itemNo}`}>
            <CardActionArea
              onClick={() => addToLastViewCard(id)}
              classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight,
              }}
            >
              <CardMedia
                className={classes.mediaImage}
                image={img}
                title={title}
                component="img"
                align="center"
              />
              <CardContent className={classes.cardContent}>
                <Typography className={classes.title} noWrap align="center">
                  {title}
                </Typography>
                <Tooltip placement="bottom-end" title={CardTooltipText(rate)}>
                  <Box align="center">
                    <Rating
                      className={classes.rating}
                      name="rating"
                      value={rate}
                      size="small"
                      precision={0.5}
                      readOnly
                      emptyIcon={
                        <StarBorder color="primary" style={{ fontSize: 18 }} />
                      }
                    />
                  </Box>
                </Tooltip>
                {oldPrice ? (
                  <Box className={classes.priceBox}>
                    <Typography className={classes.price} align="center">
                      ${price.toFixed(2)}
                    </Typography>

                    <Typography
                      className={classes.OldPrice}
                      align="center"
                      color="textSecondary"
                    >
                      <s disabled>${oldPrice.toFixed(2)}</s>
                    </Typography>
                  </Box>
                ) : (
                  <Typography className={classes.price} align="center">
                    ${price.toFixed(2)}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
          </Link>
          {stock === 0 ? (
            <Button variant="text" fullWidth disabled>
              out of stock
            </Button>
          ) : (
            <Button variant="text" fullWidth onClick={addItemToCart}>
              + add to cart
            </Button>
          )}
          <SnackBar
            open={snackbarAddToCart}
            close={snackbarClose}
            text="Added to your shopping cart!"
          />
        </Card>
      ) : (
        <Box className={classes.cardSkeleton}>
          <Skeleton
            variant="rect"
            animation="pulse"
            width={140}
            height={140}
            component="div"
          />
          <Skeleton
            variant="text"
            animation="pulse"
            width={160}
            component="p"
          />
          <Skeleton
            variant="text"
            animation="pulse"
            width={100}
            component="p"
          />
          <Skeleton variant="text" animation="pulse" width={60} component="p" />
          <Skeleton
            variant="text"
            animation="pulse"
            width={160}
            component="p"
          />
        </Box>
      )}
    </Hidden>
  );
};

function mapStateToProps(state) {
  return {
    wishlistAll: state.wishlistReducer.wishlist,
    isAuthenticated: state.loginReducer.isAuthenticated,
    lastView: state.lastViewReducer.lastView,
  };
}

export default connect(mapStateToProps, {
  addWishlistItem: wishlistAddItem,
  deleteWishlistItem: wishlistDeleteItem,
  addCartItem: addItemCart,
  addToLastViewCard: addToLastView,
})(ItemCard);
