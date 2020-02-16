import React, { useEffect, useState } from "react";
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
import useStyles from "./useStyles";
import Upload from "../../../../common/Upload/Upload";


const AddEditPartnerModal = ({ open, handleModal, partner, handleOpenSnackbar, autoRefresh }) => {
  const classes = useStyles();

  const [partnerInfo, setPartnerInfo] = useState(
    {
      name: "",
      url: "",
      customId: "",
      imageUrl: [],
    });

  useEffect(() => {
    if (partner !== null) {
      setPartnerInfo({
        name: `${partner.name}`,
        url: `${partner.url}`,
        customId: `${partner.customId}`,
        imageUrl: [`${partner.imageUrl}`],
      });
    }
  }, [partner]);

  // imgs
  const [remainingImgUrls, setRemainingImgUrls] = useState([]);
  const [deletedImgUrls, setDeletedImgUrl] = useState([]);
  const [addedImgFiles, setAddedImgFiles] = useState([]);

  const handleImages = (remainingImages, deletedImages, addedImages) => {
    setRemainingImgUrls(remainingImages);
    setDeletedImgUrl(deletedImages);
    setAddedImgFiles(addedImages);
  };
  const UploadApiAxios = (addImgs) => {
    const imagesArr = addImgs.map(item => {
      const data = new FormData();
      data.append("file", item);
      data.append("upload_preset", "plantly");
      return data;
    });

    const instance = axios.create({
      baseURL: "https://api.cloudinary.com/v1_1/plantly/image",
    });
    instance.defaults.headers.common = {};

    const axiosArray = [];
    imagesArr.forEach(item => {
      const newPromise = instance
        .post("/upload", item, {
            headers: {
              "Content-Type": null,
            },
          },
        );
      axiosArray.push(newPromise);
    });

    return axiosArray;
  };
  // imgs

  const handlePartnerInfo = prop => event => {
    setPartnerInfo({ ...partnerInfo, [prop]: event.target.value });
  };


  const submitHandler = async () => {
    let partnerData = partnerInfo;

    if (deletedImgUrls.length !== 0) {
      partnerData = { ...partnerData, imageUrl: remainingImgUrls };
    }

    if (addedImgFiles.length !== 0) {
      const uploadResult = UploadApiAxios(addedImgFiles);

      await axios
        .all(uploadResult).then(response => {
          const newUrls = partnerData.imageUrl;
          response.forEach(item => {
            newUrls.push(item.data.url);
          });
          partnerData = { ...partnerData, imageUrl: newUrls };
        })
        .catch(error => {
          console.log(error);
        });
    }

    setPartnerInfo(partnerData);

    if (partner === null) {
      const newPartner = { ...partnerInfo, customId: partnerInfo.name.split(" ").join(""), imageUrl: partnerInfo.imageUrl[0] };
      axios
        .post("/api/partners", newPartner)
        .then(newPartner => {
          console.log("newPartner", newPartner);
          const success = { type: "success", message: `New partner ${partnerInfo.name} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("newPartner", err);
          const error = { type: "error", message: `Error! New partner was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      const editedPartner = { ...partnerInfo, imageUrl: partnerInfo.imageUrl[0] };
      axios
        .put(`/api/partners/${partner.customId}`, editedPartner)
        .then(resp => {
          console.log(resp);
          const success = { type: "success", message: `Partner was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("err", err);
          const error = { type: "error", message: `Error! Partner ${partnerInfo.name} was not edited.` };
          handleOpenSnackbar(error);
        });
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
              // onSubmit={() => {
              //   submitHandler();
              // }}
            >
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
                <Upload imageUrls={partnerInfo.imageUrl} handleImages={handleImages} />
              </Box>
              <Button variant="contained" type="submit" style={{width:"100%"}}>
                Create Partner
              </Button>
            </ValidatorForm>
          </Box>
        </Fade>
      </Modal>
    );
  };

  return modal();

};

export default AddEditPartnerModal;