import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SendIcon from "@material-ui/icons/Send";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/styles";
import EcoIcon from '@material-ui/icons/Eco';

import { connect } from "react-redux";
import { getCategories, selectCategory, setCurrentPage } from "../../../store/actions/Filters";

const styles = theme => ({
  root: {
    marginTop:100,
    width: "100%",
    maxWidth: 300,
    marginBottom: 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px",
    borderRadius: 10,
    paddingBottom: 20,
  },
  line: {
    margin: "10px 20px",
    position: "relative",
    width: "80%",
    height: 5,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  subLine: {
    position: "absolute",
    top: 50,
    left: 20,
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
  title: {
    margin: "5px 20px",
    fontSize: 20,
  },
  label: {   
    width: "100%",
  },
  iconContainer:{
    marginRight:-15
  }
});

const FilterByCategory = ({ classes, categoryListing,  getCategories, selectCategory, setCurrentPage }) => {
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
        <div className={classes.line} />
        <div className={classes.subLine} />
       {categoryList}
      </List>
    </>
    // <>
    //   <Card className={classes.card}>
    //     <CardContent>
    //       <List
    //         component="nav"
    //         aria-labelledby="nested-list-subheader"
    //         subheader={
    //           // eslint-disable-next-line react/jsx-wrap-multilines
    //           <ListSubheader component="div" id="nested-list-subheader">
    //             <h1>PRODUCTS CATEGORY</h1>
    //           </ListSubheader>
    //         }
    //         className={classes.root}
    //       >
    //         <ListItem button>
    //           <ListItemIcon>
    //             <SendIcon />
    //           </ListItemIcon>
    //           <ListItemText primary="All" />
    //         </ListItem>
    //         {categoryList}
    //       </List>
    //     </CardContent>
    //   </Card>
    // </>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(FilterByCategory))
);
