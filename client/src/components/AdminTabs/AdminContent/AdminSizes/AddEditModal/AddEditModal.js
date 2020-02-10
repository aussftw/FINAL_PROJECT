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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./useStyles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddEditModal = ({ open, handleModal, item }) => {
  const classes = useStyles();

  // snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  // snackbar


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
        .post("/api/sizes", itemInfo)
        .then(newColor => {
          console.log("new size", newColor);
          handleClick()
        })
        .catch(err => {
          console.log("new size", err);
        });
    } else {
      console.log("put ", item._id, itemInfo);
      // // AR Y SURE?
      axios
        .put(`/api/sizes/${item._id}`, itemInfo)
        .then(resp => {
          console.log(resp);
          // SUCCESSFULLY   data. message
        })
        .catch(err => {
          console.log("put size", err);
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
              Add new size
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
                label="size"
                variant="outlined"
                value={itemInfo.name}
                onChange={handlePartnerInfo("name")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />

              <Button variant="contained" type="submit">
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
     { modal()}

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );

};

export default AddEditModal;