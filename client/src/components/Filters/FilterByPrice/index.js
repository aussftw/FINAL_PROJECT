import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import theme from "../../../theme";

import { selectPrice, setCurrentPage } from "../../../store/actions/Filters";

const useStyles = makeStyles(() => ({
  rootMain: {
    width: "100%",
    maxWidth: 300,
    paddingTop: 8,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.2)",
    borderRadius: 10,
    paddingBottom: 0,
  },
  margin: {
    height: theme.spacing(3),
  },
  title: {
    margin: "5px 20px",
    fontSize: 20,
  },
  subLine: {
    margin: "10px 20px",
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: theme.palette.primary.main,
    height: 8,
    width: "80%",
    margin: "10px 20px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const FilterByPrice = ({ selectPrice, setCurrentPage }) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const ValueByPrice = (event, item) => {
    setCurrentPage(1);
    selectPrice(item);
  };

  return (
    <div className={classes.rootMain}>
      <h4 className={classes.title}>Price</h4>
      <div className={classes.subLine} />
      <PrettoSlider
        onChangeCommitted={ValueByPrice}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={50}
        max={120}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    filters: state.filterReducer.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPrice: price => dispatch(selectPrice(price)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByPrice);
