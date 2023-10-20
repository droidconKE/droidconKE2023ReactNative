import axios from 'axios';
import { DEV_BASE_URL } from '../../config/constants';

export const axiosInstance = axios.create({
  baseURL: DEV_BASE_URL,
  headers: {
    Authorization: 'Bearer ZfbR9xctgNBRH5kSAqppbnwkvoJMarYdI2tf2yElGCitSaiAVQX5twHK8BWYjNLG9NNqqLv2FQ12ZTEB',
    'Api-Authorization-Key': 'droidconKe-2020',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (request) => request,
  (error) => {
    return Promise.reject(error);
  },
);
