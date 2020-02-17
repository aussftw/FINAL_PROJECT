import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import v4 from "uuid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { useStyles } from "./useStyles";

import SizeCheckbox from "./SizeCheckbox";

import { getSizes, setCurrentPage } from "../../../store/actions/Filters";

const FilterBySize = ({ sizeListing, getSizes }) => {
  const classes = useStyles();

  useEffect(() => {
    getSizes();
    // eslint-disable-next-line
  }, []);

  let sizeList = [];

  sizeList = sizeListing.map(size => {
    return <SizeCheckbox key={v4()} size={size} />;
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSizes: () => dispatch(getSizes()),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterBySize)
);
