import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "../Upload/useStyles";

const SingleUpload = ({ imageUrls, setImgToUpload }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(imageUrls || ""); // view

  const removeImgUrl = () => {
    setImage("");
  };

  const showImages = e => {
    setLoading(true);
    const fileFromInput = e.target.files;
    const blobImg = URL.createObjectURL(fileFromInput[0]);
    setImgToUpload(fileFromInput[0]);
    setImage(blobImg);
    setLoading(false);
  };

  return (
    <Box>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="image_uploads">Choose image to upload (PNG, JPG, JPEG)</label>
      <input type="file" id="image_uploads" name="file" accept=".jpg, .jpeg, .png" onChange={showImages} />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Box style={{ margin: "8px 0 8px" }}>
          <div className={classes.imgBox}>
            <img src={image} alt={image} className={classes.img} />
            {image !== "" &&
            <IconButton className={classes.iconClose} onClick={() => removeImgUrl()}><CloseIcon /></IconButton>}
          </div>
        </Box>
      )}
    </Box>
  );
};

export default SingleUpload;
