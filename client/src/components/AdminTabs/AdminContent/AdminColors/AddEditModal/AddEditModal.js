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
import useStyles from "../../AdminSizes/AddEditModal/useStyles";


const AddEditModal = ({ open, handleModal, item, handleOpenSnackbar, autoRefresh}) => {
  const classes = useStyles();

  const [itemInfo, setItemInfo] = useState(
    {
      name: "",
    });

  useEffect(() => {
    if (item !== null) {
      setItemInfo({
        name: `${item.name}`,
      });
    }
  }, [item]);


  const handlePartnerInfo = prop => event => {
    setItemInfo({ ...itemInfo, [prop]: event.target.value });
  };

  function addPartner() {
    if (item === null) {
      axios
        .post("/api/colors", itemInfo )
        .then(newColor => {
          console.log('newColor', newColor);
          const success = { type: "success", message: `New color ${itemInfo.name} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log('newColor', err);
          const error = { type: "error", message: `Error! New color was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      console.log("put ", item._id, itemInfo);
      // // AR Y SURE?
      axios
        .put(`/api/colors/${item._id}`, itemInfo )
        .then(resp => {
          console.log(resp);
          const success = { type: "success", message: `Color was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log('put color', err);
          const error = { type: "error", message: `Error! Color ${item.name} was not edited.` };
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
              style={{ padding: "4px" }}
            >
              Add new color
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
              onSubmit={() => {
                addPartner();
              }}
            >
              <TextValidator
                label="Color"
                variant="outlined"
                value={itemInfo.name}
                onChange={handlePartnerInfo("name")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <Button variant="contained" type="submit" className={classes.btn}>
                Create color
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