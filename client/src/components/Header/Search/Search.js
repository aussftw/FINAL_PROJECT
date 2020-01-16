import React from "react";
// import axios from "axios";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import MenuListComposition from "../Dropdown/Dropdown";
import useStyles from "./useStyles";

const CustomizedSearch = props => {
  const { className } = props;
  const classes = useStyles();

  // const [text, setText] = useState('');

  // function searchPhrases(phrase) {
  //
  // axios
  //   .post("/products/search", phrase)
  //   .then(products => {
  //     console.log(products);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

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
        rowsMin={4}
        // value={text}
        // onChange={event => setText({ text: event.target })}
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
    </Paper>
  );
};

export default CustomizedSearch;
