import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import MenuListComposition from "./Dropdown";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    width: 400,
    boxShadow: "none",
    border: "1px solid grey",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
  input: {
    fontSize: "0.8rem",
    // marginLeft: theme.spacing(1),
    flex: 3,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "red",
    },
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedSearch() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu"> */}
      {/*  <MenuIcon /> */}
      {/* </IconButton> */}
      <MenuListComposition
        menuTitle="All Categories"
        plantCategories={["Succulents", "Aloe", "Emergents", "Geraniums"]}
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
