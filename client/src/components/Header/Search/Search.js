import React, { useState } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { connect } from "react-redux";
import useStyles from "./useStyles";
// eslint-disable-next-line import/named
import { searchPhrases } from "../../../store/actions";

// eslint-disable-next-line no-shadow
const CustomizedSearch = ({ searchPhrases }) => {
  const classes = useStyles();

  const [text, setText] = useState({ query: "" });

  function search() {
    axios
      .post("/api/products/search", text)
      .then(products => {
        searchPhrases(products.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  // const someMiddleware = store => next => action => {
  //   if(action.type === 'Нужный_вам_экшн'){
  //     loadData(store.dispatch);
  //   }
  // }

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
        onSubmit={() => {
          search();
        }}
        className={classes.form}
      >
        <TextValidator
          value={text.query}
          onChange={searchChange("query")}
          // className={classes.input}
          variant="outlined"
          size="small"
          placeholder="Search..."
          validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{3,50}"]}
          errorMessages={[
            "this field is required",
            " Only latin letters, 3 characters and more",
          ]}
          // inputProps
        />
        <Button
          className={classes.iconButton}
          variant="contained"
          type="submit"
          aria-label="search"
          // onClick={()=>{search()}}
          // onMouseDown={search}
          // href="/search"
        >
          <SearchIcon />
        </Button>
      </ValidatorForm>
    </>
  );
};

export default connect(null, { searchPhrases })(CustomizedSearch);
