import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

import useStyles from "./useStyles";

import { addItemCart } from "../../store/actions/сart";

const ItemCardLite = ({
  id,
  itemNo,
  title,
  price,
  oldPrice = null,
  img,
  stock,
  addCartItem,
}) => {
  const classes = useStyles();
  const [snackbarAddToCart, setSnackbarAddToCart] = useState(false);

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

  return (
    <Card className={classes.card}>
      <Link className={classes.link} to={`/products/${itemNo}`}>
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
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.addToCart}
      >
        {stock === 0 ? (
          <Typography className={classes.outOfStock} align="center">
            out of stock
          </Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Typography className={classes.price} align="center">
              ${price.toFixed(2)}
            </Typography>
            {oldPrice ? (
              <Typography className={classes.OldPrice} align="center">
                <s>${oldPrice.toFixed(2)}</s>
              </Typography>
            ) : null}
            <AddShoppingCartIcon
              fontSize="large"
              className={classes.mediaIcon}
              onClick={addItemToCart}
            />
          </Box>
        )}
      </Box>
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

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

export default connect(mapStateToProps, {
  addCartItem: addItemCart,
})(ItemCardLite);
