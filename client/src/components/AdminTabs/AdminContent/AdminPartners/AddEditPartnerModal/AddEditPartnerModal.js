import React, { useCallback, useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import * as axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "./useStyles";
import SingleUpload from "../../../../common/SingleUpload/SingleUpload";
import singleUploadApiAxios from "../../../../common/SingleUpload/singleUploadApiAxios/singleUploadApiAxios";
import PreloaderAdaptive from "../../../../Preloader/Adaptive";


const AddEditPartnerModal = ({ open, handleModal, partner, handleOpenSnackbar, autoRefresh }) => {
  const classes = useStyles();

  const [partnerInfo, setPartnerInfo] = useState(
    {
      enabled: false,
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

  const request = useCallback(async (data) => {
    await singleUploadApiAxios(data);
    setPartnerInfo({ ...partnerInfo, imageUrl: data.url });
  }, [setPartnerInfo, partnerInfo]);


  const imgLogic = async () => {
    if (imgToUpload !== null) {
      const data = new FormData();
      data.append("file", imgToUpload);
      data.append("upload_preset", "partners");
      await request(data);
    }
  };

  const submitHandler = async () => {
    setLoading(true);

    // if(imgToUpload !== {}){
    await imgLogic();
    setLoading(false);
    // }

    if (partner === null) {
      const newPartner = { ...partnerInfo, customId: partnerInfo.name.split(" ").join("") };
      console.log("/api/partners", newPartner);
      // axios
      //   .post("/api/partners", newPartner)
      //   .then(newPartner => {
      //     console.log("newPartner", newPartner);
      //     const success = { type: "success", message: `New partner ${partnerInfo.name} was added` };
      //     handleOpenSnackbar(success);
      //     autoRefresh();
      //   })
      //   .catch(err => {
      //     console.log("newPartner", err);
      //     const error = { type: "error", message: `Error! New partner was not added.` };
      //     handleOpenSnackbar(error);
      //   });
    } else {
      const editedPartner = {
        ...partnerInfo,
        imageUrl: imgToUpload === null ? partner.imageUrl : partnerInfo.imageUrl,
      };
      console.log(`/api/partners/${partner.customId}`, editedPartner);
      // const editedPartner = { ...partnerInfo };
      // axios
      //   .put(`/api/partners/${partner.customId}`, editedPartner)
      //   .then(resp => {
      //     console.log(resp);
      //     const success = { type: "success", message: `Partner was successfully edited` };
      //     handleOpenSnackbar(success);
      //     autoRefresh();
      //   })
      //   .catch(err => {
      //     console.log("err", err);
      //     const error = { type: "error", message: `Error! Partner ${partnerInfo.name} was not edited.` };
      //     handleOpenSnackbar(error);
      //   });
    }
    handleModal();
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
                <PreloaderAdaptive />
              ) : (
                <Button variant="contained" type="submit" style={{ width: "100%" }}>
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