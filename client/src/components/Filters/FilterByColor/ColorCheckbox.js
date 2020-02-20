import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { connect } from "react-redux";
import { useStyles } from "./useStyles";

import {
  selectColor,
  removeColor,
  getProducts,
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
  <Checkbox color="default" inputProps={{ name: "color" }} {...props} />
));

const ColorCheckbox = ({ color, selectColor, removeColor, filters }) => {
  const classes = useStyles();

  let arrColor = [];
  const isChecked = () => {
    if (filters.color) {
      arrColor = filters.color.split(",");
    }
    return arrColor.includes(color.name);
  };
  const [check, setCheck] = useState(isChecked());

  const handleOnClick = (event, color) => {
    setCheck(event.target.checked);

    if (isChecked()) {
      arrColor = filters.color.split(",");
      const cleanColor = arrColor.filter(x => x !== color.name);
      const cleanColorToString = cleanColor.join(",");
      removeColor(cleanColorToString);
    } else {
      selectColor(color);
    }
  };

  return (
    <ListItem button key={color._id}>
      <FormControlLabel
        control={
          <GreenCheckbox
            onClick={event => {
              handleOnClick(event, color);
            }}
            value={color.name}
            checked={check}
          />
        }
        className={classes.text}
        label={color.name.charAt(0).toUpperCase() + color.name.slice(1)}
      />
    </ListItem>
  );
};

function mapStateToProps(state) {
  return {
    colorListing: state.filterReducer.colorListing,
    filters: state.filterReducer.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectColor: event => dispatch(selectColor(event)),
    removeColor: event => dispatch(removeColor(event)),
    getProducts: filters => dispatch(getProducts(filters)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ColorCheckbox)
);
