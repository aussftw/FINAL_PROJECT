import React from "react";
import { connect } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import ItemCard from "../ItemCard/ItemCard";
import useStyles from "./useStyles";

const SearchResultsPage = ({ searchResult }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      {searchResult.length > 0 ? (
        <>
          {searchResult.map(product => {
            return (
              <ItemCard
                key={product._id}
                title={product.name}
                rate={product.rate.rating}
                price={product.currentPrice}
                img={product.imageUrls[0]}
                inCart={false}
                inWishList={false}
              />
            );
          })}
          <Typography
            variant="h6"
            className={classes.message}
            component={Link}
            to="/shop"
          >
            Continue shopping
          </Typography>
        </>
      ) : (
        <>
          <Typography
            variant="h6"
            className={classes.message}
            component={Link}
            to="/"
          >
            Sorry, no results
          </Typography>
          <Typography
            variant="h6"
            className={classes.message}
            component={Link}
            to="/shop"
          >
            Go to shop
          </Typography>
          <Typography
            variant="h6"
            className={classes.message}
            component={Link}
            to="/"
          >
            Go to Plantly&apos;s home page
          </Typography>
        </>
      )}
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    searchResult: state.searchReducer.searchResult,
  };
}

export default connect(mapStateToProps)(SearchResultsPage);
