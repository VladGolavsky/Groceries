import axios from 'axios';

export const instansGen = (apiUrl: string) => {
  const newAuthInstance = axios.create({
    baseURL: String(apiUrl),
    timeout: 1000 * 30, // 30 sec
  });

  const setAuthHeader = (accessToken: string) => {
    newAuthInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  };
  
  const resetAuthHeader = () => {
    delete newAuthInstance.defaults.headers.common.Authorization;
  };
  
  return [ newAuthInstance, setAuthHeader, resetAuthHeader ];
};
