import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import theme from "../../../theme";

const useStyles = makeStyles(() => ({
  root: {
    width: "90%",
    maxWidth: 360,
    paddingTop: 8,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px",
    borderRadius: 10,
    paddingBottom: 0,
  },
  margin: {
    height: theme.spacing(3),
  },
  container: {},
  title: {
    margin: "5px 20px",
    fontSize: 20,
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
    width: "80%",
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

const FilterByPrice = () => {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const ValueByPrice = (event, item) => {
    setValue(item);
  };
  
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <h4 className={classes.title}>Filter By Price</h4>
        <div className={classes.line}>
          <div className={classes.subLine} />
        </div>
        <PrettoSlider
          onChangeCommitted={ValueByPrice}
          valueLabelDisplay="on"
          aria-label="pretto slider"
          defaultValue={120}
          max={500}
        />
      </div>
    </div>
  );
};

export default FilterByPrice;
