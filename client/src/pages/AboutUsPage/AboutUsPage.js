import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "../../components/SearchResultPage/useStyles";
import ItemCard from "../../components/ItemCard/ItemCard";

const AboutUsPage = ({ searchResult }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xl">
      (
      <>
        {searchResult.searchResult.map(product => {
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
    </Container>
  );
};

export default AboutUsPage;
