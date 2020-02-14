import axios from 'axios';

const UploadApiAxios = data => {
  const instance = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/plantly/image',
  });

instance.defaults.headers.common = {};
instance
  .post('/upload', data, {
      headers: {
        'Content-Type': null,
      },
    },
  )
  .then(response => {
    if (response.statusText === 'OK' && response.status === 200) {
      console.log(response);
      return response.data.url;
    }
  })
  .catch(err => {
    console.log(err);
    return err
  });
};

export default UploadApiAxios;
