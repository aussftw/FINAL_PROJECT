import React , { useState } from "react";
// import axios from "axios";
import Box from "@material-ui/core/Box"

const Upload = ({imageUrls}) => {
    // eslint-disable-next-line no-unused-vars
    const [image , setImage] = useState(imageUrls);
    const [loading , setLoading] = useState(false);

    const handleFile = async e => {
        // const file = e.target.files;
        // console.log(file);
        // // eslint-disable-next-line no-undef
        // const data = new FormData();
        // setLoading(true);
        // data.append("file" , file[0]);
        // data.append("upload_preset" , "plantly");
        // const result =
        //     await axios
        //         .post("https://api.cloudinary.com/v1_1/plantly/image/upload", data)
        //         .then(response => {
        //             // if(response.statusText === 'OK' && response.status === 200){
        //                 return response.data.url
        //             // }
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // setImage(result);
        // setImage(e.target.files);
        console.log(e.target.files);
        setLoading(false);
    };

    return (
      <Box>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="image_uploads">Choose images to upload (PNG, JPG, PNG)</label>
        <input type="file" id="image_uploads" name="file" accept=".jpg, .jpeg, .png" multiple onChange={handleFile} />
        {loading ? (
          <h3>Loading...</h3>
            ) : (
              <Box>
                {image.map((item) => {
                  return (
                    <img key={`id_${item}`} src={item} alt="some text" style={{width: "100px"}} />
                  )})}
              </Box>
            )}
      </Box>
    )
};

export default Upload;