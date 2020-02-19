import axios from 'axios';

const singleUploadApiAxios = data => {
  const instance = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/plantly/image/upload',
  });

  instance.defaults.headers.common = {};
  instance
    .post(null, data, {
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

export default singleUploadApiAxios;
