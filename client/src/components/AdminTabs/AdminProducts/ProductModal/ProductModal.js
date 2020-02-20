import React, { useEffect, useState } from "react";
import * as axios from "axios";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Upload from "../../../common/Upload/Upload";
import SnackBar from "../../../common/SnackBar/SnackBar";
import useStyles from "./useStyles";

const ModalProducts = ({
  data,
  isOpen,
  onClose,
  categories,
  colors,
  sizes,
}) => {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState(false);
  const [productValue, setProductValue] = useState({
    name: "",
    enabled: true,
    quantity: "",
    currentPrice: "",
    previousPrice: "",
    categories: "",
    color: "",
    sizes: "",
    productUrl: "/",
    description: "",
    imageUrls: [],
  });
  const [remainingImgUrls, setRemainingImgUrls] = useState([]);
  const [deletedImgUrls, setDeletedImgUrl] = useState([]);
  const [addedImgFiles, setAddedImgFiles] = useState([]);

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(false);
  };

  const handleImages = (remainingImages, deletedImages, addedImages) => {
    setRemainingImgUrls(remainingImages);
    setDeletedImgUrl(deletedImages);
    setAddedImgFiles(addedImages);
  };

  const handleChange = prop => event => {
    setProductValue({ ...productValue, [prop]: event.target.value });
  };
  const handleSwitchChange = event => {
    setProductValue({ ...productValue, enabled: event.target.checked });
  };

  const UploadApiAxios = addImgs => {
    const instance = axios.create({
      baseURL: "https://api.cloudinary.com/v1_1/plantly/image/upload/",
    });
    instance.defaults.headers.common = {};

    const axiosArray = [];
    addImgs.forEach(item => {
      // eslint-disable-next-line no-undef
      const file = new FormData();
      file.append("file", item);
      file.append("upload_preset", "products");
      // file.append('public_id', `${item.name.split('.', 1)[0]}`);

      const newPromise = instance.post(null, file, {
        headers: {
          "Content-Type": null,
        },
      });
      axiosArray.push(newPromise);
    });

    return axiosArray;
  };

  const submitHandler = async () => {
    let productData = productValue;

    if (deletedImgUrls.length !== 0) {
      productData = { ...productData, imageUrls: remainingImgUrls };
    }

    if (addedImgFiles.length !== 0) {
      const uploadResult = UploadApiAxios(addedImgFiles);

      await axios
        .all(uploadResult)
        .then(response => {
          const newUrls = productData.imageUrls;
          response.forEach(item => {
            newUrls.push(item.data.url);
          });
          productData = { ...productData, imageUrls: newUrls };
        })
        .catch(error => {
          console.log(error);
        });
    }

    setProductValue(productData);

    if (data !== null) {
      axios
        .put(`/api/products/${data._id}`, productData)
        .then(response => {
          console.log(response.data);
          setSnackbar(true);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err.response);
        });
    } else {
      axios
        .post("/api/products", productData)
        .then(response => {
          console.log(response.data);
          setSnackbar(true);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err.response);
        });
    }
    onClose();
  };

  useEffect(() => {
    if (data !== null) {
      setProductValue({
        name: data.name,
        enabled: data.enabled,
        quantity: data.quantity,
        currentPrice: data.currentPrice,
        previousPrice: data.previousPrice,
        categories: data.categories,
        color: data.color,
        sizes: data.sizes,
        productUrl: data.productUrl,
        description: data.description,
        imageUrls: data.imageUrls,
      });
    } else {
      setProductValue({
        name: "",
        enabled: true,
        quantity: "",
        currentPrice: "",
        previousPrice: "",
        categories: "",
        color: "",
        sizes: "",
        productUrl: "/",
        description: "",
        imageUrls: [],
      });
    }
  }, [data]);

  return (
    <>
      <SnackBar
        open={snackbar}
        close={snackbarClose}
        text="Product successfully changed!"
      />
      <Modal
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={isOpen}>
          <Box className={classes.modal}>
            {data ? (
              <Typography
                component="h3"
                align="center"
                style={{ padding: "4px" }}
              >
                {`Edit product № ${data.itemNo}`}
              </Typography>
            ) : (
              <Typography
                component="h3"
                align="center"
                style={{ padding: "4px" }}
              >
                Create new product
              </Typography>
            )}
            <IconButton
              component="span"
              onClick={onClose}
              className={classes.closeBtn}
            >
              <CloseIcon />
            </IconButton>

            <FormControl component="div" className={classes.form} fullWidth>
              <TextField
                className={classes.input}
                id="name"
                label="Product name"
                size="small"
                value={productValue.name}
                onChange={handleChange("name")}
              />
              <FormControlLabel
                value="Product Availability"
                control={
                  <Switch
                    id="enabled"
                    color="primary"
                    checked={productValue.enabled}
                    onChange={handleSwitchChange}
                    value="enabled"
                  />
                }
                label="Product Availability"
                labelPlacement="start"
              />
              <Box className={classes.inputSmallBox}>
                <TextField
                  className={classes.inputSmall}
                  id="price"
                  label="Price"
                  size="small"
                  type="number"
                  value={productValue.currentPrice}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  onChange={handleChange("currentPrice")}
                />
                <TextField
                  className={classes.inputSmall}
                  id="price"
                  label="Old Price"
                  size="small"
                  type="number"
                  value={productValue.previousPrice}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  onChange={handleChange("previousPrice")}
                />
                <TextField
                  className={classes.inputSmall}
                  id="quantity"
                  label="Quantity"
                  size="small"
                  type="number"
                  value={productValue.quantity}
                  onChange={handleChange("quantity")}
                />
                <TextField
                  className={classes.inputSmall}
                  id="category"
                  label="Category"
                  size="small"
                  select
                  value={productValue.categories}
                  onChange={handleChange("categories")}
                >
                  {categories.map(elem => (
                    <MenuItem key={elem.name} value={elem.name}>
                      {elem.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className={classes.inputSmall}
                  id="color"
                  label="Color"
                  size="small"
                  select
                  value={productValue.color}
                  onChange={handleChange("color")}
                >
                  {colors.map(elem => (
                    <MenuItem key={elem.name} value={elem.name}>
                      {elem.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className={classes.inputSmall}
                  id="sizes"
                  label="Sizes"
                  size="small"
                  select
                  value={productValue.sizes}
                  onChange={handleChange("sizes")}
                >
                  {sizes.map(elem => (
                    <MenuItem key={elem.name} value={elem.name}>
                      {elem.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className={classes.inputSmall}
                  id="url"
                  label="Product URL"
                  size="small"
                  value={productValue.productUrl}
                  onChange={handleChange("productUrl")}
                />
              </Box>
              <Box style={{ marginBottom: 12 }}>
                <Upload
                  imageUrls={productValue.imageUrls}
                  handleImages={handleImages}
                />
              </Box>
              <TextField
                className={classes.input}
                id="description"
                label="Description"
                size="small"
                variant="outlined"
                multiline
                rows="8"
                value={productValue.description}
                onChange={handleChange("description")}
              />
              <Button variant="contained" type="submit" onClick={submitHandler}>
                Submit
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalProducts;
