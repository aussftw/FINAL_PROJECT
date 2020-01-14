import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import MenuListComposition from "../Dropdown/Dropdown";
import useStyles from "./useStyles";

export default function CustomizedSearch(props) {
  const { className } = props;
  const classes = useStyles();

  return (
    <Paper component="form" className={`${classes.search} ${className}`}>
      <MenuListComposition
        menuTitle="All Categories"
        className={classes.link}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <InputBase
        className={classes.input}
        placeholder="Search Products..."
        inputProps={{ "aria-label": "search products" }}
      />
      <Button
        className={classes.iconButton}
        variant="contained"
        type="submit"
        aria-label="search"
      >
        <SearchIcon />
      </Button>
    </Paper>
  );
}
