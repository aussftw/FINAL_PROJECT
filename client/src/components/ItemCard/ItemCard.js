import React from "react";

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

// import { Rating } from "@material-ui/lab/Rating";
import useStyles from "./useStyles";

const CardTooltipText = value => {
  if (value === undefined) return "Not yet rated";
  const rate = Math.round(value * 100) / 100;

  return `Rated ${rate} out of 5`;
};

const ItemCard = ({ title, value, price, inCart, inWishList }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {inWishList ? (
        <Tooltip title="Remove from wishlist">
          <IconButton className={classes.wishList}>
            <Favorite />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add to wishlist">
          <IconButton className={classes.wishList}>
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
          image="/img/10-310x270.jpg"
          title="Plant"
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
          <Tooltip title={CardTooltipText(value)}>
            <Box align="center" gutterBottom>
              {/* <Rating
                className={classes.rating}
                name="rating"
                value={value}
                size="small"
                precision={0.5}
                readOnly
                emptyIcon={
                  <StarBorder color="primary" style={{ fontSize: 18 }} />
                }
              /> */}
            </Box>
          </Tooltip>
          <Typography className={classes.price} align="center">
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
        {inCart ? (
          <Tooltip title="Remove from cart">
            <Button variant="text" className={classes.removeFromCart} fullWidth>
              in cart
            </Button>
          </Tooltip>
        ) : (
          <Button variant="text" fullWidth>
            + add to cart
          </Button>
        )}
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
