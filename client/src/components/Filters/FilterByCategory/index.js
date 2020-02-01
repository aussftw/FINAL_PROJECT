import React, { useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import EcoIcon from "@material-ui/icons/Eco";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useStyles } from "./useStyles";
import { withStyles } from "@material-ui/core/styles";

import {
  getCategories,
  selectCategory,
  setCurrentPage,
} from "../../../store/actions/Filters";

const ListItemText = withStyles({
  root: {
    fontSize: "0.95em",
  },
})(props => (
  <ListItemText {...props} />
));
const FilterByCategory = ({
  categoryListing,
  getCategories,
  selectCategory,
  setCurrentPage,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const handleCategoryClick = (event, category) => {
    selectCategory(category);
    setCurrentPage(1);
  };

  let categoryList = [];
  categoryList = categoryListing.map(category => {
    return (
      <ListItem
        className={classes.listItem}
        key={category._id}
        button
        onClick={event => {
          handleCategoryClick(event, category.id);
        }}
      >
        <ListItemIcon className={classes.iconContainer}>
          <EcoIcon />
        </ListItemIcon>
        <ListItemText className={classes.text} primary={category.name} />
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
        <Typography
          className={classes.title}
          variant="h3"
          style={{ cursor: "default" }}
        >
          Category
        </Typography>
        <div className={classes.subLine} />
        <ListItem button>
          <ListItemIcon className={classes.iconContainer}>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory);
