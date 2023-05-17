import * as effects from 'redux-saga/effects';
import { Alert } from 'react-native';

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api, { setAuthHeader } from './apiConfig';
import * as ENDPOINTS from 'src/constants/endpoints';
import * as ERRORS from 'src/constants/errors';
import { IRootState } from 'src/redux';
import { ITokens } from 'src/interfaces/token.interface';
import * as actions from 'src/redux/actions';
import { apiUrlSelector } from 'src/redux/selectors/config';

export function* get(endpointRightSide: string, options?: AxiosRequestConfig | null) {
  const endpointLeftSide = (yield effects.select(apiUrlSelector)) as string;
  const endpoint = `${endpointLeftSide}${endpointRightSide}`;
  try {
    return (yield effects.call(api.get, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    console.log('eeeee', error)
    if (!error?.response) throw error;
    if (error?.response?.status === 404) {
      Alert.alert(ERRORS.SomethingWentWrong);
      throw 'ERROR';
    }
    if (error?.response?.statusCode === 401) {
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

export function* del(endpointRightSide: string, options?: AxiosRequestConfig | null) {
  const endpointLeftSide = (yield effects.select(apiUrlSelector)) as string;
  const endpoint = `${endpointLeftSide}${endpointRightSide}`;
  try {
    return (yield effects.call(api.delete, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.status === 404) {
      Alert.alert(ERRORS.SomethingWentWrong);
      throw 'ERROR';
    }
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

export function* post(endpointRightSide: string, data: any, options?: AxiosRequestConfig | null) {
  const endpointLeftSide = (yield effects.select(apiUrlSelector)) as string;
  const endpoint = `${endpointLeftSide}${endpointRightSide}`;
  try {
    return (yield effects.call(api.post, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.status === 404 && (endpointRightSide !== ENDPOINTS.signIn() && endpointRightSide !== ENDPOINTS.signUp())) {
      Alert.alert(ERRORS.SomethingWentWrong);
      throw 'ERROR';
    }
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

export function* put(endpointRightSide: string, data: any, options?: AxiosRequestConfig | null) {
  const endpointLeftSide = (yield effects.select(apiUrlSelector)) as string;
  const endpoint = `${endpointLeftSide}${endpointRightSide}`;
  try {
    return (yield effects.call(api.put, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.status === 404) {
      Alert.alert(ERRORS.SomethingWentWrong);
      throw 'ERROR';
    }
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.post, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.put, endpoint, data, options || {})) as AxiosResponse;
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


export function* patch(endpointRightSide: string, data: any, options?: AxiosRequestConfig | null) {
  const endpointLeftSide = (yield effects.select(apiUrlSelector)) as string;
  const endpoint = `${endpointLeftSide}${endpointRightSide}`;
  try {
    return (yield effects.call(api.patch, endpoint, data, options || {})) as AxiosResponse;
  } catch (error: any) {
    if (!error?.response) throw error;
    if (error?.response?.status === 404) {
      Alert.alert(ERRORS.SomethingWentWrong);
      throw 'ERROR';
    }
    if (error?.response?.data?.statusCode === 401) {
      try {
        const refreshToken = (yield effects.select((state: IRootState ) => state.auth.refreshToken)) as string;

        const { data } = (yield effects.call(api.patch, ENDPOINTS.refresh(), null, { headers: { Authorization: `Bearer ${refreshToken}` } } )) as { data: ITokens };
        if (data?.accessToken) {
          setAuthHeader(data?.accessToken);
          yield effects.put(actions.setTokensAction({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }));

          return (yield effects.call(api.patch, endpoint, data, options || {})) as AxiosResponse;
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
