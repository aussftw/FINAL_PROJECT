import React, { useState } from "react";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import StarBorder from "@material-ui/icons/StarBorder";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import Rating from "@material-ui/lab/Rating";
import useStyles from "./useStyles";

const CardTooltipText = value => {
  if (value === undefined) return "Not yet rated";

  return `Rated ${value} out of 5`;
};

const ItemCard = ({ title, rate, price, img, inCart, inWishlist }) => {
  const classes = useStyles();
  const [wishlist, setWishlist] = useState(inWishlist);
  const [cart, setCart] = useState(inCart);

  return (
    <Card className={classes.card}>
      {wishlist ? (
        <Tooltip title="Remove from wishlist">
          <IconButton
            className={classes.wishList}
            onClick={() => setWishlist(false)}
          >
            <Favorite />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add to wishlist">
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
          title="Plant"
          component="div"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            gutterBottom
            noWrap
            align="center"
          >
            {title}
          </Typography>
          <Tooltip placement="bottom-end" title={CardTooltipText(rate)}>
            <Box align="center" gutterBottom>
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
        {cart && (
          <Typography className={classes.inCart} align="center">
            IN CART
          </Typography>
        )}
      </CardActionArea>
      {!cart && (
        <Button variant="text" fullWidth onClick={() => setCart(true)}>
          + add to cart
        </Button>
      )}
    </Card>
  );
};

export default ItemCard;
