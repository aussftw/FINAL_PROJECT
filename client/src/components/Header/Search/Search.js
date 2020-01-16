import React, { useState } from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import MenuListComposition from "../Dropdown/Dropdown";
import useStyles from "./useStyles";

const CustomizedSearch = props => {
  const { className } = props;
  const classes = useStyles();

  const [text, setText] = useState({ query: "" });

  const searchPhrases = e => {
    e.preventDefault();
    axios
      .post("/products/search", text)
      .then(products => {
        // eslint-disable-next-line no-console
        console.log(products);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const searchChange = prop => event => {
    setText({ ...text, [prop]: event.target.value });
  };

  return (
    <Paper component="form" className={`${classes.search} ${className}`}>
      <MenuListComposition
        menuTitle="All Categories"
        className={classes.link}
      />
      <Divider className={classes.divider} orientation="vertical" />

      <ValidatorForm noValidate={false} onSubmit={searchPhrases}>
        <TextValidator
          value={text.query}
          onChange={searchChange("query")}
          className={classes.input}
          // disableUnderline
          placeholder="Search Products..."
          validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$"]}
          errorMessages={[
            "this field is required",
            " Only 2 characters and more, including only latin letters",
          ]}
        />

        <Button
          className={classes.iconButton}
          variant="contained"
          type="submit"
          aria-label="search"
          // onSubmit={(e)=>{e.preventDefault(); searchPhrases()}}
        >
          <SearchIcon />
        </Button>
      </ValidatorForm>
    </Paper>
  );
};

export default CustomizedSearch;
