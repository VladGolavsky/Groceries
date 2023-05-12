import * as effects from 'redux-saga/effects';

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api, { setAuthHeader } from './apiConfig';
// import * as endpoints from 'src/constants/endpoints';


export function* get(endpoint: string, options?: AxiosRequestConfig | null) {
  try {
    return (yield effects.call(api.get, endpoint, options || {})) as AxiosResponse;
  } catch (error) {
    
  }
};

export function* del(endpoint: string, options?: AxiosRequestConfig | null) {
  try {
    return (yield effects.call(api.delete, endpoint, options || {})) as AxiosResponse;
  } catch (error) {
    
  }

}

export function* post(endpoint: string, data: any, options?: AxiosRequestConfig | null) {
  try {
    return (yield effects.call(api.post, endpoint, data, options || {})) as AxiosResponse;
  } catch (error) {
    
  }
}

export function* put(endpoint: string, data: any, options?: AxiosRequestConfig | null) {
  try {
    return (yield effects.call(api.put, endpoint, data, options || {})) as AxiosResponse;
  } catch (error) {
    
  }
};
