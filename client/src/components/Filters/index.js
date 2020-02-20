import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByPrice from "./FilterByPrice";
import Pagination from "./Pagination";
import ModalFiltersAdaptive from "./ModalFiltersAdaptive";
import ItemCard from "../ItemCard/ItemCard";
import PreloaderAdaptive from "../Preloader/Adaptive";
import { getProducts, setCurrentPage } from "../../store/actions/Filters";
import { useStyles } from "./useStyles";

const Products = ({
  productListing,
  currentPage,
  getProducts,
  setCurrentPage,
  isLoading,
}) => {
  const [productsPerPage] = useState(9);

  const classes = useStyles();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
          oldPrice={value.previousPrice}
          img={value.imageUrls[0]}
          stock={value.quantity}
        />
      );
    });
  }

  // Get current products
  const indexLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexLastProducts - productsPerPage;
  const currentProduct = listProduct.slice(
    indexOfFirstProducts,
    indexLastProducts
  );

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Container className={classes.filtersContainer} maxWidth="lg">
        <Typography variant="h3" style={{ cursor: "default" }}>
          Shop
        </Typography>
        <div className={classes.main}>
          <div className={classes.allFilters}>
            <FilterByCategory />
            <FilterByColor />
            <FilterBySize />
            <FilterByPrice />
          </div>
          <div className={classes.items}>
            {isLoading ? (
              <PreloaderAdaptive />
            ) : listProduct.length === 0 ? (
              <div className={classes.wrapper}>
                <div className={classes.span}>
                  <Typography component="span">
                    No results were found for your request
                  </Typography>
                </div>
              </div>
            ) : (
              <>
                <ModalFiltersAdaptive />
                <div className={classes.itemCard}>{currentProduct}</div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={productListing.length}
                  paginate={paginate}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productListing: state.filterReducer.productListing,
    filters: state.filterReducer.filters,
    currentPage: state.filterReducer.currentPage,
    isLoading: state.filterReducer.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
