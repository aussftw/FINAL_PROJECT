import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./useStyles";

import { setCurrentPage ,
  getColors,
  selectColor,
  removeColor,
} from "../../../store/actions/Filters";
import { connect } from "react-redux";



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

const FilterByColor = ({ filters, colorListing, getColors,
  selectColor,
  removeColor,
  setCurrentPage }) => {

  const classes = useStyles();
  
  useEffect(() => {
    getColors();
    // eslint-disable-next-line
  }, []);

  const handleColorClick = event => {
     setCurrentPage(1)
    // eslint-disable-next-line no-param-reassign
    event.target.indeterminate = !event.target.indeterminate;
    let arrColor = [];
    if (filters.color) {
      arrColor = filters.color.split(",");
    }
    if (arrColor.includes(event.target.value)) {
      const cleanColor = arrColor.filter(x => x !== event.target.value);
      const cleanColorToString = cleanColor.join(",");
      removeColor(cleanColorToString);
    } else {
      selectColor(event);
    }
  };

  let colorsList = [];

  colorsList = colorListing.map(color => {
    return (
      <ListItem button key={color._id}>
        <FormControlLabel
          control={
            <GreenCheckbox onClick={handleColorClick} value={color.name} />
          }
          label={color.name}
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
        <h4 className={classes.title}>Filter By Color</h4>
        <div className={classes.line} />
        <div className={classes.subLine} />
        {colorsList}
      </List>
    </>
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
    getColors: () => dispatch(getColors()),
    selectColor: event => dispatch(selectColor(event)),
    removeColor: event => dispatch(removeColor(event)),
    setCurrentPage: currentPage => dispatch(setCurrentPage(currentPage)),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterByColor)
);
