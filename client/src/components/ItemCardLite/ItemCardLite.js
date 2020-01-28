import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";

import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";

import useStyles from "./useStyles";

import { addItemCart } from "../../store/actions/сart";

const ItemCardLite = ({
  id,
  itemNo,
  title,
  price,
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

            <Typography className={classes.price} align="center">
              $
              {price.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {stock === 0 ? (
        <Typography className={classes.outOfStock} align="center">
          out of stock
        </Typography>
      ) : (
        <Button variant="text" fullWidth onClick={addItemToCart}>
          + add to cart
        </Button>
      )}
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
          message={(
            <Box>
              <CheckCircleRoundedIcon />
              <span className={classes.snackbarMessage}>
                Added to your shopping cart!
              </span>
            </Box>
          )}
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
  addCartItem: addItemCart
})(ItemCardLite);
