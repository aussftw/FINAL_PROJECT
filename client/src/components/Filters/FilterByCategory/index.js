import React, { useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EcoIcon from '@material-ui/icons/Eco';
import { useStyles } from "./useStyles";
import { connect } from "react-redux";

import { getCategories, selectCategory, setCurrentPage } from "../../../store/actions/Filters";

const FilterByCategory = ({ categoryListing,  getCategories, selectCategory, setCurrentPage }) => {
  const classes = useStyles();
  
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleCategoryClick = (event, category) => {
    selectCategory(category);
    setCurrentPage(1)
  };

  let categoryList = [];
  categoryList = categoryListing.map(category => {
    return (
      <ListItem
        key={category._id}
        button
        onClick={event => {
          handleCategoryClick(event, category.id);
        }}
      >
        <ListItemIcon className = {classes.iconContainer} >
          <EcoIcon />
        </ListItemIcon>
        <ListItemText primary={category.name} />
      </ListItem>
    );
  });
  return (
      <>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <h4 className={classes.title}>Filter By Category</h4>
        <div className={classes.subLine} />
        <ListItem button>
          <ListItemIcon className = {classes.iconContainer}>
            <EcoIcon />
          </ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
       {categoryList}
      </List>
    </>
  );
};

const mapStateToProps = state => {
  return {
    categoryListing: state.filterReducer.categoryListing,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    selectCategory: category => dispatch(selectCategory(category)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterByCategory)

