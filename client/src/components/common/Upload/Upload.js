import React , { useState } from "react";
import axios from "axios";
import Box from "@material-ui/core/Box"

const Upload = ({imageUrls}) => {
    const [image , setImage] = useState(imageUrls[0]);
    const [loading , setLoading] = useState(false);

    const handleFile = async e => {
        const file = e.target.files;
        setLoading(true);
        // eslint-disable-next-line no-undef
        const data = new FormData();
        data.append("file" , file[0]);
        data.append("upload_preset" , "plantly");

        // let options= ({
        //   'cloud_name': 'plantly',
        //   'api_key': '746777216353698',
        //   'api_secret': 'yVIbGbxWxO_cYvjGJ9v9EbozXqc'
        // });

        const instance = axios.create();
        instance.defaults.headers.common = {};
            instance
                .post("https://api.cloudinary.com/v1_1/plantly/image/upload", data , {headers : {
                        "Content-Type":null
                    }}
                )
                .then(response => {
                    if (response.statusText === 'OK' && response.status === 200) {
                        console.log(response.data);
                        setImage(response.data.url);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
    };

    return (
      <Box>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="image_uploads">Choose images to upload (PNG, JPG, PNG)</label>
        <input type="file" id="image_uploads" name="file" accept=".jpg, .jpeg, .png" multiple onChange={handleFile} />
        {loading ? (
          <h3>Loading...</h3>
            ) : (
              <Box style={{margin: "8px 0 8px"}}>
                <img src={image} alt="" style={{height: "80px"}} />
              </Box>
            )}
      </Box>
    )
};

export default Upload;