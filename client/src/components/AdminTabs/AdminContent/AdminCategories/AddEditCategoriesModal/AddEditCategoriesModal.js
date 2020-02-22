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
import singleUploadApiAxios from "../../../../common/SingleUpload/singleUploadApiAxios/singleUploadApiAxios";
import SingleUpload from "../../../../common/SingleUpload/SingleUpload";
import PreloaderAdaptiveSmall from "../../../../Preloader/AdaptiveSmall";


const AddEditCategoriesModal = ({ open, handleModal, category, handleOpenSnackbar, autoRefresh }) => {
  const classes = useStyles();
  
  const [loading, setLoading] = useState(false);
  const [imgToUpload, setImgToUpload] = useState(null);
  const [categoryInfo, setCategoryInfo] = useState(
    {
      id: "",
      name: "",
      parentId: "null",
      description: "",
      imgUrl: "",
    });

  useEffect(() => {
    if (category !== null) {
      setCategoryInfo({
        name: `${category.name}`,
        id: `${category.id}`,
        parentId: `${category.parentId}`,
        description: `${category.description}`,
        imgUrl: `${category.imgUrl}`,
      });
    }
  }, [category]);

  const handlePartnerInfo = prop => event => {
    setCategoryInfo({ ...categoryInfo, [prop]: event.target.value });
  };

  
  const requestToDb = categoryInfo => {
    if (category === null) {

      const newCategory = { ...categoryInfo, id: categoryInfo.name.split(" ").join("") };
      axios
        .post("/api/catalog", newCategory)
        .then(newCategory => {
          const success = { type: "success", message: `New category ${newCategory.data.name} was added` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(err => {
          console.log("newCategory", err);
          const error = { type: "error", message: `Error! New category was not added.` };
          handleOpenSnackbar(error);
        });
    } else {
      const editedCategory = { ...categoryInfo };
      axios
        .put(`/api/catalog/${category.id}`, editedCategory)
        .then(resp => {
          console.log('resp',resp);
          const success = { type: "success", message: `Category was successfully edited` };
          handleOpenSnackbar(success);
          autoRefresh();
        })
        .catch(() => {
          const error = { type: "error", message: `Error! Category ${categoryInfo.name} was not edited.` };
          handleOpenSnackbar(error);
        });
    }
    setLoading(false);
    handleModal();
  };


  const submitHandler = async () => {
    setLoading(true);
    let categoryRequest = categoryInfo;

    if (imgToUpload !== null) {
      singleUploadApiAxios(imgToUpload, "categories").then(response => {
        if (response.status === 200) {
          console.log(response);
          categoryRequest = ({ ...categoryRequest, imgUrl: response.data.url });
          console.log(categoryRequest);
          requestToDb(categoryRequest);
        }
      })
        .catch(err => {
          console.log(err);
        });
    } else {
      requestToDb(categoryRequest);
    }
  };

  // const submitHandler = async () => {
  //   let partnerData = categoryInfo;
  //
  //   if (deletedImgUrls.length !== 0) {
  //     partnerData = { ...partnerData, imgUrl: remainingImgUrls };
  //   }
  //
  //   if (addedImgFiles.length !== 0) {
  //     const uploadResult = UploadApiAxios(addedImgFiles);
  //
  //     await axios
  //       .all(uploadResult).then(response => {
  //         const newUrls = partnerData.imgUrl;
  //         response.forEach(item => {
  //           newUrls.push(item.data.url);
  //         });
  //         partnerData = { ...partnerData, imgUrl: newUrls };
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  //
  //   setCategoryInfo(partnerData);
  //
  //   if (category === null) {
  //     const newCategory = {
  //       ...categoryInfo,
  //       id: categoryInfo.name.split(" ").join("").toLowerCase(),
  //       imgUrl: categoryInfo.imgUrl[0],
  //     };
  //     axios
  //       .post("/api/catalog", newCategory)
  //       .then(newPartner => {
  //         console.log("newPartner", newPartner);
  //         const success = { type: "success", message: `New category ${categoryInfo.name} was added` };
  //         handleOpenSnackbar(success);
  //         autoRefresh();
  //       })
  //       .catch(err => {
  //         console.log("newPartner", err);
  //         const error = { type: "error", message: `Error! New category was not added.` };
  //         handleOpenSnackbar(error);
  //       });
  //   } else {
  //     const editedCategory = {
  //       ...categoryInfo,
  //       id: categoryInfo.name.split(" ").join("").toLowerCase(),
  //       imgUrl: categoryInfo.imgUrl[0],
  //     };
  //     axios
  //       .put(`/api/catalog/${category.id}`, editedCategory)
  //       .then(resp => {
  //         console.log(resp);
  //         const success = { type: "success", message: `Category was successfully edited` };
  //         handleOpenSnackbar(success);
  //         autoRefresh();
  //       })
  //       .catch(err => {
  //         console.log("err", err);
  //         const error = { type: "error", message: `Error! Category ${categoryInfo.name} was not edited.` };
  //         handleOpenSnackbar(error);
  //       });
  //   }
  //   handleModal();
  // };


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
              {(category === null) ? ("Add new category") : ("Edit category")}
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
                label="Category name"
                variant="outlined"
                value={categoryInfo.name}
                onChange={handlePartnerInfo("name")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
              <TextValidator
                id="description"
                label="Description"
                size="small"
                variant="outlined"
                multiline
                rows="5"
                value={categoryInfo.description}
                onChange={handlePartnerInfo("description")}
                className={classes.input}
                validators={["required"]}
                errorMessages={["This field is required"]}
              />
              <Box className={classes.imgBox}>
                <SingleUpload imageUrls={categoryInfo.imgUrl} setImgToUpload={setImgToUpload} />
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

export default AddEditCategoriesModal;