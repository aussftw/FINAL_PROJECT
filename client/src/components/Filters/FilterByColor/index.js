import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import v4 from "uuid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { useStyles } from "./useStyles";

import ColorCheckbox from "./ColorCheckbox";

import { setCurrentPage, getColors } from "../../../store/actions/Filters";

const FilterByColor = ({ colorListing, getColors }) => {
  const classes = useStyles();

  useEffect(() => {
    getColors();
  }, [getColors]);

  let colorsList = [];

  colorsList = colorListing.map(color => {
    return <ColorCheckbox key={v4()} color={color} />;
  });

  return (
    <>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <Typography className={classes.title} variant="h3">
          Color
        </Typography>
        <div className={classes.subLine} />
        {colorsList}
      </List>
    </>
  );
};
function mapStateToProps(state) {
  return {
    colorListing: state.filterReducer.colorListing,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getColors: () => dispatch(getColors()),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterByColor)
);
