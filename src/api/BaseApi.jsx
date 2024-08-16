import axiosClient from './apiClient';

export class BaseApi {

  request(method, url, config) {
    return axiosClient({
      ...config,
      method,
      baseURL: process.env.REACT_APP_BASE_URL,
      url: url,
    });
  }
}
