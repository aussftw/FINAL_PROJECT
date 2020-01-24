import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import { wishlistDeleteItem } from "../../../../store/actions/wishlist";
import { addItemCart } from "../../../../store/actions/сart";
// import {Link} from "react-router-dom";

const WishlistCard = ({
  id,
  itemNo,
  title,
  price,
  img,
  qty,
  // eslint-disable-next-line no-shadow
  wishlistDeleteItem,
  addItemCart,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  return (
    <Grid container className={classes.item} spacing={1}>
      <Grid item xs={3} sm={2} className={classes.imageGrid}>
        <img className={classes.image} src={img} alt={title} />
      </Grid>
      <Grid item xs={5} sm={3} className={classes.titleGrid}>
        <Typography className={classes.name}>{title}</Typography>
      </Grid>
      <Grid item xs={3} sm={1}>
        <Typography className={classes.price}>${price.toFixed(2)}</Typography>
      </Grid>
      {matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton
              aria-label="delete"
              onClick={() => {
                wishlistDeleteItem(id);
              }}
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
          variant={qty > 0 && "outlined"}
          type="button"
          disabled={!(qty > 0)}
          onClick={() => addItemCart(id, itemNo)}
        >
          Add to cart
        </Button>
      </Grid>
      {!matches && (
        <Grid item xs={1} className={classes.closeBtnGrid}>
          <Tooltip title="remove">
            <IconButton
              aria-label="delete"
              onClick={() => wishlistDeleteItem(id)}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
};

export default connect(null, { wishlistDeleteItem, addItemCart })(WishlistCard);
