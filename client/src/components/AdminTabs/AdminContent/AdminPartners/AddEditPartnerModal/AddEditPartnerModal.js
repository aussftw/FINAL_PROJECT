import React, { useEffect, useState } from "react";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "./useStyles";
import SingleUpload from "../../../../common/SingleUpload/SingleUpload";
import singleUploadApiAxios from "../../../../common/SingleUpload/singleUploadApiAxios/singleUploadApiAxios";
import PreloaderAdaptiveSmall from "../../../../Preloader/AdaptiveSmall";


const AddEditPartnerModal = ({ open, handleModal, partner, handleOpenSnackbar, autoRefresh }) => {
  const classes = useStyles();

  const [partnerInfo, setPartnerInfo] = useState(
    {
      enabled: true,
      name: "",
      url: "",
      customId: "",
      imageUrl: "",
    });
  const [imgToUpload, setImgToUpload] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (partner !== null) {
      setPartnerInfo({
        enabled: partner.enabled,
        name: `${partner.name}`,
        url: `${partner.url}`,
        customId: `${partner.customId}`,
        imageUrl: `${partner.imageUrl}`,
      });
    }
  }, [partner]);

  const handlePartnerInfo = prop => event => {
    setPartnerInfo({ ...partnerInfo, [prop]: event.target.value });
  };

  const requestToDb = partnerInfo => {
    if (partner === null) {

      const newPartner = { ...partnerInfo, customId: partnerInfo.name.split(" ").join("") };
      axios
        .post("/api/partners", newPartner)
        .then(newPartner => {
          const success = { type: "success", message: `New partner ${newPartner.data.name} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("newPartner", err);
          const error = { type: "error", message: `Error! New partner was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      const editedPartner = { ...partnerInfo };
      axios
        .put(`/api/partners/${partner.customId}`, editedPartner)
        .then(resp => {
          console.log('resp',resp);
          const success = { type: "success", message: `Partner was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(() => {
          const error = { type: "error", message: `Error! Partner ${partnerInfo.name} was not edited.` };
          handleOpenSnackbar(error);
        });
    }
    setLoading(false);
    handleModal();
  };

  const submitHandler = async () => {
    setLoading(true);
    let partnerRequest = partnerInfo;

    if (imgToUpload !== null) {
      singleUploadApiAxios(imgToUpload, "partners").then(response => {
        if (response.status === 200) {
          console.log(response);
          partnerRequest = ({ ...partnerRequest, imageUrl: response.data.url });
          console.log(partnerRequest);
          requestToDb(partnerRequest);
        }
      })
        .catch(err => {
          console.log(err);
        });
    } else {
      requestToDb(partnerRequest);
    }
  };


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
              {(partner === null) ? ("Add new partner") : ("Edit partner")}
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
              <FormControlLabel
                value="Enabled"
                control={(
                  <Switch
                    // disabled={partnerInfo.canceled}
                    checked={partnerInfo.enabled}
                    value="enabled"
                    id="enabled"
                    color="primary"
                    onChange={handlePartnerInfo("enabled")}
                  />
                )}
                label="Enabled"
                labelPlacement="start"
              />
              <TextValidator
                label="Partner name"
                variant="outlined"
                value={partnerInfo.name}
                onChange={handlePartnerInfo("name")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
              <TextValidator
                label="Partner url"
                variant="outlined"
                value={partnerInfo.url}
                onChange={handlePartnerInfo("url")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
              <Box className={classes.imgBox}>
                <SingleUpload imageUrls={partnerInfo.imageUrl} setImgToUpload={setImgToUpload} />
              </Box>
              {loading ? (
                <PreloaderAdaptiveSmall />
                ) : (
                  <Button variant="contained" type="submit" className={classes.btn}>
                    Submit
                  </Button>
                )}
            </ValidatorForm>
          </Box>
        </Fade>
      </Modal>
    );
  };

  return modal();

};

export default AddEditPartnerModal;