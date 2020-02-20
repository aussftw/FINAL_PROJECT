import React, { useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "../../AdminCategories/AddEditCategoriesModal/useStyles";
import AddContentInput from "../AddContentInput/AddContentInput";


const AddEditModal = ({ open, handleModal, item, handleOpenSnackbar, autoRefresh }) => {
  const classes = useStyles();

  const [itemInfo, setItemInfo] = useState(
    {
      option: "",
      // content: [{_id: ``, text: ``, link: ``}],
      content: [],
    });

  useEffect(() => {
    if (item !== null) {
      setItemInfo({
        option: `${item.option}`,
        content: [item.content.map((item) => {
          return {
            _id: `${item._id}`,
            text: `${item.text}`,
            link: `${item.link}`,
          };
        }),
        ],
      });
    }
  }, [item, itemInfo.content]);

  const addContentToState = (contentInput) => {
    setItemInfo({ ...itemInfo, content: [...itemInfo.content, contentInput] });
  };

  const handleInfo = prop => event => {
    setItemInfo({ ...itemInfo, [prop]: event.target.value });
  };


  function submitHandler() {
    if (item === null) {
      axios
        .post("/api/contacts ", itemInfo)
        .then(newContact => {
          console.log("newContact", newContact);
          const success = { type: "success", message: `New contact ${itemInfo.option} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("newContact", err);
          const error = { type: "error", message: `Error! New contact was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      axios
        .put(`/api/contacts/${item._id}`, itemInfo)
        .then(resp => {
          console.log(resp);
          const success = { type: "success", message: `Contact was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("put Contact", err);
          const error = { type: "error", message: `Error! Contact ${item.option} was not edited.` };
          handleOpenSnackbar(error);
        });
    }
    handleModal();
  }

  const modal = () => {
    return (
      <Modal
        open={open}
        onClose={handleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalBox}>
            <Typography
              component="h3"
              align="center"
              className={classes.title}
            >
              {(item === null) ? ("Add new contact") : ("Edit contact")}
            </Typography>

            <IconButton
              component="span"
              onClick={handleModal}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <ValidatorForm
              noValidate={false}
              className={classes.inputBox}
              onSubmit={submitHandler}
            >
              <TextValidator
                label="Option"
                variant="outlined"
                value={itemInfo.option}
                onChange={handleInfo("option")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              {(item !== null) ? (
                <AddContentInput item={item.content[0]} itemInfo={itemInfo} addContentToState={addContentToState} />
              ) : (
                <div>
                  <AddContentInput item={null} itemInfo={itemInfo} addContentToState={addContentToState} />
                </div>
              )}
              <Button variant="contained" type="submit" className={classes.btn}>
                Submit
              </Button>
            </ValidatorForm>
          </Box>
        </Fade>
      </Modal>
    );
  };

  return modal();

};

export default AddEditModal;