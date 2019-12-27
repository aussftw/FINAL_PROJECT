import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import theme from "../../../theme";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid black",
    margin: 20,
  },
  line: {
    position: "relative",
    width: "80%",
    height: 5,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  subLine: {
    position: "absolute",
    width: "60%",
    height: 5,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    top: 79,
  },
  title: {
    margin: 10,
  },
}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
const FilterByColor = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    checkedFirst: true,
    checkedSecond: true,
    checkedThird: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

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
        <ListItem button>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedFirst}
                onChange={handleChange("checkedFirst")}
                value="checkedFirst"
              />
            }
            label="Green"
          />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedSecond}
                onChange={handleChange("checkedSecond")}
                value="checkedSecond"
              />
            }
            label="White"
          />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedThird}
                onChange={handleChange("checkedThird")}
                value="checkedThird"
              />
            }
            label="Other"
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
};

export default FilterByColor;
