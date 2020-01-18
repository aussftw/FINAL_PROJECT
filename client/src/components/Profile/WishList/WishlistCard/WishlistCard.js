import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";

import { wishlistDeleteItem } from "../../../../store/actions/Wishlist";
// import {Link} from "react-router-dom";

const WishlistCard = ({
  id,
  // itemIndex,
  title,
  price,
  img,
  qty,
  // eslint-disable-next-line no-shadow
  wishlistDeleteItem,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  // const [cartQuantity, setCartQuantity] = useState(cartQty);
  // const [subtotal, setSubtotal] = useState(cartQty * price);
  // const qId = `quantity-${id}`;

  // const calculatePrice = useCallback(() => {
  //   setSubtotal(Math.round(cartQuantity * price * 100) / 100);
  // }, [cartQuantity, price]);

  // const changeCartProductQuantity = event => {
  //   if (event.target.value > shopQty) {
  //     setCartQuantity(shopQty);
  //   } else if (event.target.value < 0) {
  //     setCartQuantity(0);
  //   } else if (event.target.value === "") {
  //     setCartQuantity(1);
  //   } else {
  //     setCartQuantity(event.target.value);
  //   }
  // };

  // const decreaseCartProductQuantity = () => {
  //   if (cartQuantity > 0) {
  //     setCartQuantity(+cartQuantity - 1);
  //   }
  // };
  // const increaseCartProductQuantity = () => {
  //   if (cartQuantity < shopQty) {
  //     setCartQuantity(+cartQuantity + 1);
  //   }
  // };
  //
  // useEffect(() => {
  //   calculatePrice();
  // }, [calculatePrice]);

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
        <Typography className={classes.stock}>
          {qty > 0 ? "In Stock" : "Out Stock"}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.wrapperGrid}>
        <Button className={classes.btn} variant="outlined" type="button">
          Add to cart
        </Button>
      </Grid>
      {!matches && (
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
      {/* {matches && <Grid item xs={1} />} */}
    </Grid>
  );
};

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {
    //     error: state.wishlistReducer.error,
  };
}

export default connect(mapStateToProps, { wishlistDeleteItem })(WishlistCard);
