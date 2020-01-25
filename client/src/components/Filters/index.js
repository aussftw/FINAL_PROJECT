import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByPrice from "./FilterByPrice";
import Pagination from "./Pagination";

import { getProducts, setCurrentPage } from "../../store/actions/Filters";

import ItemCard from "../ItemCard/ItemCard";

const useStyles = makeStyles(() => ({
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
  },
  allFilters: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  items: {
    marginTop: 93,
    width: "70%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "start",
  },
}));

const Products = ({
  productListing,
  isProductListing,
  filters,
  currentPage,
  getProducts,
  setCurrentPage,
}) => {
  const [postsPerPage] = useState(9);

  const classes = useStyles();

  useEffect(() => {
    getProducts(filters);
    // eslint-disable-next-line
  }, [filters]);

  let listProduct = [];
  if (productListing) {
    listProduct = productListing.map(value => {
      return (
        <ItemCard
          key={value._id}
          id={value._id}
          itemNo={value.itemNo}
          title={value.name}
          rate={value.rate.rating}
          price={value.currentPrice}
          img={value.imageUrls[0]}
          stock={value.quantity}
        />
      );
    });
  }

  // Get current posts
  const indexLastPosts = currentPage * postsPerPage;
  const indexOfFirstPost = indexLastPosts - postsPerPage;
  const currentPost = listProduct.slice(indexOfFirstPost, indexLastPosts);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className={classes.main}>
      <div className={classes.allFilters}>
        <FilterByCategory />
        <FilterByColor />
        <FilterBySize />
        <FilterByPrice />
      </div>
      <div className={classes.items}>
        {isProductListing ? <div>Loading...</div> : currentPost}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={productListing.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    productListing: state.filterReducer.productListing,
    filters: state.filterReducer.filters,
    currentPage: state.filterReducer.currentPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: filters => dispatch(getProducts(filters)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
