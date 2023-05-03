import axios from 'axios';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  validateStatus: (status) => status === 200 || status === 201
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = {
      message: 'Something went wrong',
      code: 500
    };
    if (error.response && error.response.data) {
      if (typeof error.response.data === 'string') {
        response.message = error.response.data;
      } else if (error.response.data.detail) {
        if (typeof error.response.data.detail === 'string') {
          response.message = error.response.data.detail;
        } else {
          error.response.data.detail.forEach(element => {
            response.message = `${element.loc[1]} ${element.msg}`;
          });
        }
      } else if (error.response.data.message) {
        if (typeof error.response.data.message === 'string') {
          response.message = error.response.data.message;
        }
      }
    }
    return Promise.reject(response)
  }
);

const setNull = (listObject) => {
  if (typeof listObject === 'object' && listObject !== null) {
    Object.entries(listObject).forEach(([index, data]) => {
      if (typeof data === 'object') {
        listObject[index] = setNull(data);
      } else if (data === "") {
        listObject[index] = null;
      } else if (index.toLowerCase().indexOf('country') !== -1 || index.toLowerCase().indexOf('state') !== -1) {
        if (data === "0") {
          listObject[index] = null;
        } else if (data === 0) {
          listObject[index] = null;
        }
      }
    });
  }
  return listObject;
}

axiosInstance.interceptors.request.use(async (config) => {
  if (config.data) {
    config.data = setNull(config.data)
    // console.log(typeof config.data)
  }
  return config;
}, (error) => Promise.reject(error))

export default axiosInstance;
