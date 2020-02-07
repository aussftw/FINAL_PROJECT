import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useStyles } from "./useStyles";


import {
  getSizes,
  selectSizes,
  removeSizes,
  setCurrentPage 
} from "../../../store/actions/Filters";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(props => (
  <Checkbox color="default" inputProps={{ name: "sizes" }} {...props} />
));

const FilterBySize = ({ 
  sizeListing,
  filters,
  getSizes,
  selectSizes,
  removeSizes, 
  setCurrentPage }) => {
  
  const classes = useStyles();
  
  useEffect(() => {
    getSizes();
    // eslint-disable-next-line
  }, []);
  const handleSizeClick = event => {
    setCurrentPage(1) 
    // eslint-disable-next-line no-param-reassign
    event.target.indeterminate = !event.target.indeterminate;
    let arrSize = [];
    if (filters.sizes) {
      arrSize = filters.sizes.split(",");
    }
    if (arrSize.includes(event.target.value)) {
      const cleanSize = arrSize.filter(x => x !== event.target.value);
      const cleanSizeToString = cleanSize.join(",");
      removeSizes(cleanSizeToString);
    } else {
      selectSizes(event);
    }
  };

  let sizeList = [];

  sizeList = sizeListing.map(size => {
    return (
      <ListItem button key={size._id}>
        <FormControlLabel
          control={
            <GreenCheckbox onClick={handleSizeClick} value={size.name} />
          }
          label={size.name.charAt(0).toUpperCase() + size.name.slice(1)}
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
          Size
        </Typography>
        <div className={classes.subLine} />
        {sizeList}
      </List>
    </>
  );
};
function mapStateToProps(state) {
  return {
    sizeListing: state.filterReducer.sizeListing,
    filters: state.filterReducer.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSizes: () => dispatch(getSizes()),
    selectSizes: event => dispatch(selectSizes(event)),
    removeSizes: event => dispatch(removeSizes(event)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterBySize)
);
