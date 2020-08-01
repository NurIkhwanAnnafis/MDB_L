/* eslint-disable no-param-reassign */
import Axios from 'axios';
import Router from 'next/router';
import Swal from 'sweetalert2';

export const BASE_URL = process.env.URL_API;
export const { API_KEY } = process.env;

const httpService = Axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'content-type': 'application/json'
  }
});

httpService.interceptors.request.use(
  config => {
    const user = null;

    if (user) {
      config.headers.Authorization = user.token;
    }

    return config;
  },
  error => Promise.reject(error)
);

httpService.interceptors.response.use(
  config => config,
  async error => {
    console.log(error.response);
    if (error.response.status === 401) {
      if (error.response.data.status_code === 30) {
        await Swal.fire(
          'Login Error!',
          error.response.data.status_message,
          'error'
        );
      } else {
        await Swal.fire('Your Token is Expired', 'Please login again', 'info');
        Router.replace('/');
      }
    } else if (error.response.status >= 500) {
      // something error with server
      await Swal.fire('Something error with Server', 'Server error', 'error');
    } else {
      // another something error
    }
    return Promise.reject(error);
  }
);

export default httpService;
