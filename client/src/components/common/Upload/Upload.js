import React, {useEffect, useState} from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from "./useStyles";

const Upload = ({ imageUrls, handleImages }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState(imageUrls || []); // view
  const [blobFiles, setBlobFiles] = useState([]); // view

  // props to submit
  const [deletedImagesURLs, setDeletedImagesURLs] = useState([]);
  const [addedImagesFiles , setAddedImagesFiles] = useState([]);

  //
  // const removeItem = item => {
  //   const updatedImages = [...images].filter((image, index) => index !== item);// view filter
  //   const newArrWithFiles = [...allImgAndFiles].filter((image, index) => index !== item);
  //   const deletedItem = [...allImgAndFiles].filter((image, index)=> index === item);
  //   if(typeof deletedItem === "string"){
  //     setDeletedImageURLs([...deletedImagesURLs,deletedItem]) // set deleted IMG URLS
  //   }
  //   const newFiles = newArrWithFiles.filter(item => typeof item  === Object); // add new FILES to state
  //   setAddedImagesFiles(newFiles);
  //   const updatedURLS = newArrWithFiles.filter(item => typeof item === "string"); // set UPDATED IMG URLS
  //   setUpdatedImgURLs([...updatedImgURLs, updatedURLS]);
  //   setImages(updatedImages);
  // };
  //

  const removeImgUrl = item => {
    const filteredImgUrls = images.filter((image,index) => index !== item);
    setImages(filteredImgUrls);
    const deletedImgUrl = images.filter((image,index) => index === item);
    setDeletedImagesURLs(deletedImagesURLs.concat(deletedImgUrl));
  };

  const showImages = e => {
    setLoading(true);
    const filesFromInput = e.target.files;
    setAddedImagesFiles([...addedImagesFiles, ...filesFromInput]);
    const newImgs = [];
    for (let key in filesFromInput) {
      if (filesFromInput.hasOwnProperty(key)) {
        let newFile = URL.createObjectURL(filesFromInput[key]);
        newImgs.push(newFile);
      }
    }
    setBlobFiles([...blobFiles, ...newImgs]);
    setLoading(false);
  };


  const removeNewFile = item => {
    const updatedBlobs = blobFiles.filter((image,index) => index !== item);
    setBlobFiles(updatedBlobs);
    const updatedFiles = addedImagesFiles.filter((image,index) => index !== item);
    setAddedImagesFiles(updatedFiles);
  };

  useEffect(()=> {
    handleImages(images, deletedImagesURLs, addedImagesFiles)
    // console.log("images URL: ", images);
    // console.log("Deletes: ", deletedImagesURLs);
    // console.log("Files: ", addedImagesFiles);
  }, [addedImagesFiles, deletedImagesURLs, handleImages, images]);

  return (
    <Box>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="image_uploads">Choose images to upload (PNG, JPG, JPEG)</label>
      <input type="file" id="image_uploads" name="file" accept=".jpg, .jpeg, .png" multiple onChange={showImages}/>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <Box style={{ margin: '8px 0 8px' }}>
          {images.map((item, index) => {
            return(<div key={item + index} className={classes.imgBox}>
              <img src={item} alt={item} className={classes.img}/>
              <IconButton className={classes.iconClose} onClick={() => removeImgUrl(index)}><CloseIcon /></IconButton>
            </div>) ;
          })}
          {blobFiles.map((item , index) => {
            return  (<div key={item + index} className={classes.imgBox}>
              <img src={item} alt={item} className={classes.img}/>
              <IconButton className={classes.iconClose} onClick={() => removeNewFile(index)}><CloseIcon /></IconButton>
            </div>)
          })}
        </Box>
      )}
    </Box>
  );
};

export default Upload;
