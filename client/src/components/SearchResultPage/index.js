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
        </>
      ) : (
        <>
          <Typography align="center" variant="h6" className={classes.message}>
            Sorry, no results
          </Typography>
          <Typography align="center" variant="h6" className={classes.message}>
            Go to&nbsp;
            <Link to="/shop" className={classes.link}>
              shop
            </Link>
          </Typography>
          <Typography align="center" variant="h6" className={classes.message}>
            Go to&nbsp;
            <Link to="/" className={classes.link}>
              Plantly&apos;s home page
            </Link>
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
