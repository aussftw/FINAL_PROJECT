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
          <Typography variant="h4">Search results</Typography>
          {searchResult.map(value => {
            return (
              <ItemCard
                key={`card-key-${value._id}`}
                id={value._id}
                itemNo={value.itemNo}
                title={value.name}
                rate={value.rate.rating}
                price={value.currentPrice}
                oldPrice={value.previousPrice}
                img={value.imageUrls[0]}
                stock={value.quantity}
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
