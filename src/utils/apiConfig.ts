import axios from 'axios';

export const authInstance = axios.create({
  baseURL: '',
  timeout: 1000 * 30, // 30 sec
});

export const setAuthHeader = (accessToken: string) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const resetAuthHeader = () => {
  delete authInstance.defaults.headers.common.Authorization;
};

export default authInstance;
