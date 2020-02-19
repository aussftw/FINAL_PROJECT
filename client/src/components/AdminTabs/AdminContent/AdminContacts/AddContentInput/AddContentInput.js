import React, { useState } from "react";
import { TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";

const AddContentInput = ({ item, itemInfo, setItemInfo }) => {
  // const classes = useStyles();


  const [contentInput, setContentInput] = useState({ _id: ``, text: ``, link: `` });

  // useEffect(() => {
  //   if (item !== null) {
  //     setContentInput({
  //           _id: `${item._id}`,
  //           text: `${item.text}`,
  //           link: `${item.link}`,
  //     })
  // }
  // },[]);


  const handleInfo = prop => event => {
    setContentInput({ ...contentInput, [prop]: event.target.value });
    setItemInfo({ ...itemInfo, content: [...itemInfo.content, contentInput] });
  };


//   function submitHandler() {
// // PUSH
// //     if (item !== null){
//     // setItemInfo({...ItemInfo, content: [...ItemInfo.content, contentInput] })
//     // } else {
//     setItemInfo({ ...itemInfo, content: [...itemInfo.content, contentInput] });
//     // }
//
//   }


  const input = () => {
    return (
      <>
        <TextValidator
          label="Text"
          variant="outlined"
          value={contentInput.text}
          onChange={handleInfo("text")}
          // validators={["required"]}
          // errorMessages={["this field is required"]}
        />
        <TextValidator
          label="Link"
          variant="outlined"
          value={contentInput.link}
          onChange={handleInfo("link")}
          // validators={["required"]}
          // errorMessages={["this field is required"]}
        />
        {/*<Button variant="contained" onClick={submitHandler}>*/}
        {/*  Add*/}
        {/*</Button>*/}
      </>
    );
  };


  return input();
};

export default AddContentInput;