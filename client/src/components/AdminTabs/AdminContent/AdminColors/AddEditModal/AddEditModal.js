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


const AddEditModal = ({ open, handleModal, item }) => {
  const classes = useStyles();

  const [itemInfo, setItemInfo] = useState(
    {
      name: "",
      // _id: "",
    });

  useEffect(() => {
    if (item !== null) {
      setItemInfo({
        name: `${item.name}`,
        // _id: `${item._id}`,
      });
    }
  }, [item]);


  const handlePartnerInfo = prop => event => {
    setItemInfo({ ...itemInfo, [prop]: event.target.value });
  };

  function addPartner() {
    if (item === null) {
      // console.log("POST /api/colors", itemInfo);
      axios
        .post("/api/colors", itemInfo )
        .then(newColor => {
          console.log('newColor', newColor);
        })
        .catch(err => {
          console.log('newColor', err);
        });
    } else {
      console.log("put ", item._id, itemInfo);
      // // AR Y SURE?
      axios
        .put(`/api/colors/${item._id}`, itemInfo )
        .then(resp => {
          console.log(resp);
          // SUCCESSFULLY   data. message
        })
        .catch(err => {
          console.log('put color', err);
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

              <Button variant="contained" type="submit">
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