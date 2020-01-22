import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import StarBorder from "@material-ui/icons/StarBorder";

import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import { addItemCart } from "../../store/actions/Cart";

// eslint-disable-next-line no-shadow
const ItemCard = ({
  id,
  itemNo,
  title,
  rate,
  price,
  img,
  inWishlist,
  addItemCart,
}) => {
  const classes = useStyles();
  const [wishlist, setWishlist] = useState(inWishlist);
  const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);

  const CardTooltipText = value => {
    if (value === undefined) return "Not yet rated";

    return `Rated ${value.toFixed(2)} out of 5`;
  };

  const addItemToCart = () => {
    addItemCart(id, itemNo);
    setSnackbarAddToCart(true);
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarAddToCart(false);
  };

  return (
    <Card className={classes.card}>
      {wishlist ? (
        <Tooltip arrow title="Remove from wishlist">
          <IconButton
            className={classes.wishList}
            onClick={() => setWishlist(false)}
          >
            <Favorite />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip arrow title="Add to wishlist">
          <IconButton
            className={classes.wishList}
            onClick={() => setWishlist(true)}
          >
            <FavoriteBorder />
          </IconButton>
        </Tooltip>
      )}
      <CardActionArea
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight,
        }}
      >
        <CardMedia
          className={classes.mediaImage}
          image={img}
          title={title}
          component="div"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} noWrap align="center">
            {title
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
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
          <Typography className={classes.price} align="center">
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="text" fullWidth onClick={() => addItemToCart()}>
        + add to cart
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={snackbarAddToCart}
        onClose={snackbarClose}
        autoHideDuration={1500}
      >
        <SnackbarContent
          className={classes.snackbar}
          role="alert"
          message={
            <Box>
              <CheckCircleRoundedIcon />
              <span className={classes.snackbarMessage}>
                Added to your shopping cart!
              </span>
            </Box>
          }
        />
      </Snackbar>
    </Card>
  );
};

export default connect(null, { addItemCart })(ItemCard);
