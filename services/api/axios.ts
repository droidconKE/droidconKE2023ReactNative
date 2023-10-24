import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_DEV_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_TOKEN}`,
    'Api-Authorization-Key': process.env.EXPO_PUBLIC_API_AUTHORIZATION_KEY,
    Accept: 'application/json',
  },
});
