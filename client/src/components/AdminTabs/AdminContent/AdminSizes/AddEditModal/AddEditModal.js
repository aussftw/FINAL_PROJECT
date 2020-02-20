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
import useStyles from "./useStyles";


const AddEditModal = ({ open, handleModal, item, handleOpenSnackbar, autoRefresh }) => {
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

  function changeSize() {
    if (item === null) {
      axios
        .post("/api/sizes", itemInfo)
        .then(newColor => {
          console.log("new size", newColor);
          const success = { type: "success", message: `New size ${itemInfo.name} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("new size", err);
          const error = { type: "error", message: `Error! New size was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      console.log("put ", item._id, itemInfo);
      axios
        .put(`/api/sizes/${item._id}`, itemInfo)
        .then(resp => {
          console.log(resp);
          const success = { type: "success", message: `Size was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("put size", err);
          const error = { type: "error", message: `Error! Size ${item.name} was not edited.` };
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
              {(item === null) ? ("Add new size") : ("Edit size")}
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
              onSubmit={() => {
                changeSize();
              }}
            >
              <TextValidator
                label="size"
                variant="outlined"
                value={itemInfo.name}
                onChange={handlePartnerInfo("name")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <Button variant="contained" type="submit" className={classes.btn}>
                Create size
              </Button>
            </ValidatorForm>
          </Box>
        </Fade>
      </Modal>
    );
  };

  return (
    <>
      {modal()}
    </>
  );

};

export default AddEditModal;