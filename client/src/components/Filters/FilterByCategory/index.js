import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EcoIcon from "@material-ui/icons/Eco";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { useStyles } from "./useStyles";

import {
  getCategories,
  selectCategory,
  setCurrentPage,
} from "../../../store/actions/Filters";

const FilterByCategory = ({
  categoryListing,
  getCategories,
  selectCategory,
  setCurrentPage,
  filters,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleCategoryClick = (event, category) => {
    selectCategory(category);
    setCurrentPage(1);
  };

  const currentIndex = categoryListing.findIndex(
    item => filters.categories === item.name
  );
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  let categoryList = [];
  categoryList = categoryListing.map((category, index) => {
    return (
      <ListItem
        index={index}
        className={classes.listItem}
        key={category._id}
        button
        onClick={event => {
          handleCategoryClick(event, category.id);
          setSelectedIndex(index);
        }}
        selected={selectedIndex === index}
      >
        <ListItemIcon
          className={
            selectedIndex === index
              ? classes.iconActiveContainer
              : classes.iconContainer
          }
        >
          <EcoIcon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ className: classes.text }}
          primary={category.name}
        />
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
        <Typography className={classes.title} variant="h3">
          Category
        </Typography>
        <div className={classes.subLine} />
        {categoryList}
      </List>
    </>
  );
};

const mapStateToProps = state => {
  return {
    categoryListing: state.filterReducer.categoryListing,
    filters: state.filterReducer.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    selectCategory: category => dispatch(selectCategory(category)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory);
