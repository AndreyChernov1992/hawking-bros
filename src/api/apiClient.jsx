import axios from 'axios';

const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      const url = process.env.REACT_APP_BASE_URL;
      window.location.href = url;
    }
    console.error(
      'Looks like there was a problem. Status Code: ' + error.status,
    );
    return Promise.reject(error);
  },
);

axiosClient.interceptors.request.use(
  request => request,
  error => {
    if (error.status === 401) {
      const url = process.env.REACT_APP_BASE_URL
      window.location.href = url
    }
    console.error("Looks like there was a problem. Status Code: " + error.status);
    return Promise.reject(error);
  }
)


export default axiosClient;
