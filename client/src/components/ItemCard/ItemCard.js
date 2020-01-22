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
// import { Link }  from "react-router-dom";

import StarBorder from "@material-ui/icons/StarBorder";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import Rating from "@material-ui/lab/Rating";
import { connect } from "react-redux";
import useStyles from "./useStyles";

import {
  wishlistAddItem,
  wishlistDeleteItem,
} from "../../store/actions/wishlist";

const CardTooltipText = value => {
  if (value === undefined) return "Not yet rated";

  return `Rated ${value} out of 5`;
};

// eslint-disable-next-line no-shadow,no-unused-vars
const ItemCard = ({
  title,
  rate,
  price,
  img,
  inCart,
  inWishlist,
  id,
  wishlistAll,
  wishlistAddItem,
  wishlistDeleteItem,
  isAuthenticated,
}) => {
  const classes = useStyles();
  // const [wishlist, setWishlist] = useState(inWishlist);
  const [cart, setCart] = useState(inCart);

  const handleDeleteItemFromWishlist = () => {
    if (isAuthenticated) {
      wishlistAddItem(id);
    }
  };

  return (
    <Card className={classes.card}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!wishlistAll.every(el => el._id !== id) ? (
        <Tooltip arrow title="Remove from wishlist">
          <IconButton
            className={classes.wishList}
            onClick={() => wishlistDeleteItem(id)}
          >
            <Favorite />
          </IconButton>
        </Tooltip>
      ) : (
        // isAuthenticated ? (
        <Tooltip
          arrow
          title={isAuthenticated ? "Add to wishlist" : "Only for logined user"}
        >
          <IconButton
            className={classes.wishList}
            onClick={() => handleDeleteItemFromWishlist()}
          >
            <FavoriteBorder />
          </IconButton>
        </Tooltip>
        // ) : (
        //   <Link to="/login">
        //     <IconButton
        //       className={classes.wishList}
        //     >
        //       <FavoriteBorder />
        //     </IconButton>
        //   </Link>
        // )
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
        {cart && (
          <Typography className={classes.inCart} align="center">
            IN CART
          </Typography>
        )}
      </CardActionArea>
      {!cart && (
        <Button variant="outlined" fullWidth onClick={() => setCart(true)}>
          + add to cart
        </Button>
      )}
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    wishlistAll: state.wishlistReducer.wishlist,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps, {
  wishlistAddItem,
  wishlistDeleteItem,
})(ItemCard);
