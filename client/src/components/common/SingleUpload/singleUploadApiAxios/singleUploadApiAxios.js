import axios from 'axios';

const singleUploadApiAxios = (data , folder) => {
  const instance = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/plantly/image/upload',
  });
  instance.defaults.headers.common = {};

  // eslint-disable-next-line no-undef
  const file = new FormData();
  file.append("file", data);
  file.append("upload_preset", folder);

  const newPromise = instance
    .post(null, file, {
        headers: {
          'Content-Type': null,
        },
      },
    );

  return newPromise;
};

export default singleUploadApiAxios;
