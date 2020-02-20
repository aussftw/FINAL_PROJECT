import React, { useState, useEffect } from "react";
import { TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import {Typography, Box} from "@material-ui/core";
import useStyles from "./useStyles";

const AddContentInput = ({ item, itemInfo, addContentToState }) => {
  const classes = useStyles();


  const [contentInput, setContentInput] = useState({ text: ``, link: `` });
  const [hintLine, seHintLine] = useState({ show: false, message: `` });

  useEffect(() => {
    if (item !== null) {
      setContentInput({
            // _id: `${item._id}`,
            text: `${item.text}`,
            link: `${item.link}`,
      })
  }
  },[item]);


  const handleInfo = prop => event => {
    setContentInput({ ...contentInput, [prop]: event.target.value });
  };

  function submitHandler() {
    addContentToState(contentInput);
    seHintLine({show: true, message: `Successfully added ${itemInfo.content.length+1} field` })
  }


  const input = () => {
    return (
      <Box className={classes.wrapper}>
        <Typography className={classes.hintLine}>Please, add information</Typography>
        <TextValidator
          className={classes.input}
          label="Text"
          variant="standard"
          value={contentInput.text}
          onChange={handleInfo("text")}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <TextValidator
          className={classes.input}
          label="Link"
          variant="standard"
          value={contentInput.link}
          onChange={handleInfo("link")}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <Button variant="text" onClick={submitHandler} className={classes.btn}>
          Add
        </Button>
        {hintLine.show && <Typography className={classes.hintLine}>{hintLine.message}</Typography>}
      </Box>
    );
  };

  return input();
};

export default AddContentInput;