import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import v4 from "uuid";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { useStyles } from "./useStyles";

import ColorCheckbox from "./ColorCheckbox";

import { setCurrentPage, getColors } from "../../../store/actions/Filters";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(props => (
  <Checkbox color="default" inputProps={{ name: "color" }} {...props} />
));

const FilterByColor = ({ colorListing, getColors, setCurrentPage }) => {
  const classes = useStyles();

  useEffect(() => {
    getColors();
    // eslint-disable-next-line
  }, []);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  let colorsList = [];
  const [filterIndex, setFilterIndex] = React.useState(null);

  colorsList = colorListing.map((color, index) => {
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
