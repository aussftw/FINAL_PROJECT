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
  filters,
}) => {
  const [productsPerPage] = useState(9);

  const classes = useStyles();

  useEffect(() => {
    const valuesToBoolean = Object.values(filters).every(value => Boolean(value) === false);
    if (valuesToBoolean) {
      getProducts();
    }
    // eslint-disable-next-line
    }, []);

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
            ) : (
              <>
                <ModalFiltersAdaptive />
                { listProduct.length === 0 && (
                <div className={classes.wrapper}>
                  <div className={classes.span}>
                    <Typography align="center">
                      No results were found for your request
                    </Typography>
                  </div>
                </div>
                )}
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
