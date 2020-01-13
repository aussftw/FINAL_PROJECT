import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { chooseColor } from "../../../store/actions/choiceColorFilter";
import { useStyles } from "./useStyles";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const FilterByColor = props => {
  const classes = useStyles();

  // const [state, setState] = useState({
  //   checkedFirst: true,
  //   checkedSecond: true,
  //   checkedThird: true,
  // });

  const handleChange = name => event => {
    console.log(name)
    props.chooseColor( {[name]: event.target.checked} );
  };

  console.log("PROPS INTO COLORS====", props.colors.color);
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
                checked={props.colors.color.green}
                onChange={handleChange("green")}
                value={props.colors.color.green}
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
                checked={props.colors.color.red}
                onChange={handleChange("red")}
                value={props.colors.color.red}
              />
            }
            label="White"
          />
        </ListItem>
        <ListItem className={classes.listItem} button>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={props.colors.color.coloured}
                onChange={handleChange("coloured")}
                value={props.colors.color.coloured}
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

function mapStateToProps(state) {
  return {
    colors: state.chooseColor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chooseColor: name => dispatch(chooseColor(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByColor);
