import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";
import { wishlistDeleteItem } from "../../../../store/actions/wishlist";
import { addItemCart } from "../../../../store/actions/сart";

const WishlistCard = ({
  id,
  itemNo,
  title,
  price,
  img,
  qty,
  deleteWishlistItem,
  addCartItem,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  return (
    <Grid container className={classes.item} spacing={1}>
      <Grid item xs={3} sm={2} className={classes.imageGrid}>
        <Link to={`/products/${itemNo}`} className={classes.link}>
          <img className={classes.image} src={img} alt={title} />
        </Link>
      </Grid>
      <Grid item xs={5} sm={3} className={classes.titleGrid}>
        <Link to={`/products/${itemNo}`} className={classes.link}>
          <Typography className={classes.name}>{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>${price.toFixed(2)}</Typography>
      </Grid>
      {matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton
              aria-label="delete"
              onClick={() => deleteWishlistItem(id)}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
      <Grid item xs={6} sm={1} className={classes.wrapperGrid}>
        <Typography className={qty > 0 ? classes.stock : classes.outstock}>
          {qty > 0 ? "In Stock" : "Out Stock"}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.wrapperGrid}>
        <Button
          className={qty > 0 ? classes.btn : classes.disabledBtn}
          variant={qty > 0 ? "outlined" : "text"}
          type="button"
          disabled={!(qty > 0)}
          onClick={() => addCartItem(id, itemNo)}
        >
          Add to cart
        </Button>
      </Grid>
      {!matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton
              aria-label="delete"
              onClick={() => deleteWishlistItem(id)}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
};

export default connect(null, {
  deleteWishlistItem: wishlistDeleteItem,
  addCartItem: addItemCart,
})(WishlistCard);
