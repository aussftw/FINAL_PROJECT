import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./useStyles";
// import { Tooltip } from "@material-ui/core";

import {
  searchPhrases,
  searchPhrasesFailure,
} from "../../../store/actions/Search";

const CustomizedSearch = ({ searchPhrases, searchPhrasesFailure }) => {
  const classes = useStyles();

  const [text, setText] = useState({ query: "" });

  function search() {
    axios
      .post("/api/products/search", text)
      .then(products => {
        searchPhrases(products.data);
      })
      .catch(err => {
        searchPhrasesFailure(err);
      });
  }

  const searchChange = prop => event => {
    setText({ ...text, [prop]: event.target.value });
  };

  return (
    <>
      {/* <MenuListComposition */}
      {/*  menuTitle="All Categories" */}
      {/*  className={classes.link} */}
      {/* /> */}
      {/* <Divider className={classes.divider} orientation="vertical" /> */}

      <ValidatorForm
        noValidate={false}
        onSubmit={search}
      >
        <TextValidator
          value={text.query}
          onChange={searchChange("query")}
          className={classes.input}
          variant="outlined"
          size="small"
          placeholder="Search..."
          validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{3,50}"]}
          // errorMessages={[
          //   "This field is required",
          //   "Only latin letters, 3 characters and more",
          // ]}
          FormHelperTextProps={{className: classes.helper}}
        />

        <Button
          className={classes.iconButton}
          variant="contained"
          type="submit"
          aria-label="search"
          component={Link}
          to="/search"
          onClick={search}
          href="/#"
        >
          <SearchIcon />
        </Button>
      </ValidatorForm>
    </>
  );
};

export default connect(null, { searchPhrases, searchPhrasesFailure })(CustomizedSearch);
