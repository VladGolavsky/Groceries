import * as effects from 'redux-saga/effects';

import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import api, { setAuthHeader } from './apiConfig';
import * as ENDPOINTS from 'src/constants/endpoints';
import { IRootState } from 'src/redux';
import { ITokens } from 'src/interfaces/token.interface';
import * as actions from 'src/redux/actions';

export function* get(endpoint: string, options?: AxiosRequestConfig | null) {
  try {
    return (yield effects.call(api.get, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.get, endpoint, options || {})) as AxiosResponse;
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
  try {
    return (yield effects.call(api.delete, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.delete, endpoint, options || {})) as AxiosResponse;
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
  try {
    return (yield effects.call(api.post, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.post, endpoint, data, options || {})) as AxiosResponse;
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
  try {
    return (yield effects.call(api.put, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.post, endpoint, data, options || {})) as AxiosResponse;
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
