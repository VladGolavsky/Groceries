import * as effects from 'redux-saga/effects';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import api, { setAuthHeader } from './apiConfig';
import * as ENDPOINTS from 'src/constants/endpoints';
import { IRootState } from 'src/redux';
import { ITokens } from 'src/interfaces/token.interface';
import * as actions from 'src/redux/actions';
import { apiUrlSelector } from 'src/redux/selectors/config';
import { instansGen } from 'src/screens/Instans';

export function* get(endpoint: string, options?: AxiosRequestConfig | null) {
  const apiUrl = (yield effects.select(apiUrlSelector)) as string;
  let apiBasic = api;
  let setAuthHeaderBasic = setAuthHeader;
  let resetAuthHeader;

  if (apiUrl && apiUrl.trim() !== '') {
    [apiBasic, setAuthHeaderBasic, resetAuthHeader] = instansGen(apiUrl)
  }

  try {
    return (yield effects.call((apiUrl ? apiBasic : api).get, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    console.log('eeeee', error)
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call((apiUrl ? apiBasic : api).post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call((apiUrl ? apiBasic : api).get, endpoint, options || {})) as AxiosResponse;
        }
      } catch (error) {
        if (!error?.response) throw error;

        // logout
      }
    } else {
      if (error.response) throw error.response?.data;
    }
  }
};

export function* del(endpoint: string, options?: AxiosRequestConfig | null) {
  const apiUrl = (yield effects.select(apiUrlSelector)) as string;
  let apiBasic = api;
  let setAuthHeaderBasic =  setAuthHeader;
  let resetAuthHeader;

  if (apiUrl && apiUrl.trim() !== '') {
    [apiBasic, setAuthHeaderBasic, resetAuthHeader] = instansGen(apiUrl)
  }

  try {
    return (yield effects.call((apiUrl ? apiBasic : api).delete, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call((apiUrl ? apiBasic : api).post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call((apiUrl ? apiBasic : api).delete, endpoint, options || {})) as AxiosResponse;
        }
      } catch (error) {
        if (!error?.response) throw error;
        
        // logout
      }
    } else {
      if (error.response) throw error.response?.data;
    }
  }
};

export function* post(endpoint: string, data: any, options?: AxiosRequestConfig | null) {
  const apiUrl = (yield effects.select(apiUrlSelector)) as string;
  let apiBasic = api;
  let setAuthHeaderBasic =  setAuthHeader;
  let resetAuthHeader;

  if (apiUrl && apiUrl.trim() !== '') {
    [apiBasic, setAuthHeaderBasic, resetAuthHeader] = instansGen(apiUrl)
  }

  try {
    return (yield effects.call((apiUrl ? apiBasic : api).post, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call((apiUrl ? apiBasic : api).post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call((apiUrl ? apiBasic : api).post, endpoint, data, options || {})) as AxiosResponse;
        }
      } catch (error) {
        if (!error?.response) throw error;
        
        // logout
      }
    } else {
      if (error.response) throw error.response?.data;
    }
  }
};

export function* put(endpoint: string, data: any, options?: AxiosRequestConfig | null) {
  const apiUrl = (yield effects.select(apiUrlSelector)) as string;
  let apiBasic = api;
  let setAuthHeaderBasic =  setAuthHeader;
  let resetAuthHeader;

  if (apiUrl && apiUrl.trim() !== '') {
    [apiBasic, setAuthHeaderBasic, resetAuthHeader] = instansGen(apiUrl)
  }

  try {
    return (yield effects.call((apiUrl ? apiBasic : api).put, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call((apiUrl ? apiBasic : api).post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call((apiUrl ? apiBasic : api).put, endpoint, data, options || {})) as AxiosResponse;
        }
      } catch (error) {
        if (!error?.response) throw error;
        
        // logout
      }
    } else {
      if (error.response) throw error.response?.data;
    }
  }
};


export function* patch(endpoint: string, data: any, options?: AxiosRequestConfig | null) {
  const apiUrl = (yield effects.select(apiUrlSelector)) as string;
  let apiBasic = api;
  let setAuthHeaderBasic =  setAuthHeader;
  let resetAuthHeader;

  if (apiUrl && apiUrl.trim() !== '') {
    [apiBasic, setAuthHeaderBasic, resetAuthHeader] = instansGen(apiUrl)
  }


  try {
    return (yield effects.call((apiUrl ? apiBasic : api).patch, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call((apiUrl ? apiBasic : api).patch, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call((apiUrl ? apiBasic : api).patch, endpoint, data, options || {})) as AxiosResponse;
        }
      } catch (error) {
        if (!error?.response) throw error;
        
        // logout
      }
    } else {
      if (error.response) throw error.response?.data;
    }
  }
};
