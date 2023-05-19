export enum configEnum {
  isValidApiUrl = 'isValidApiUrl',
  apiUrl = 'apiUrl',
  deviceId = 'deviceId',
  isSocketConnected = 'isSocketConnected',
  isNetConnected = 'isNetConnected'
};

export type ConfigEnumType = configEnum.isValidApiUrl | configEnum.apiUrl | configEnum.deviceId | configEnum.isNetConnected | configEnum.isSocketConnected;

export interface ConfigReducer {
  isValidApiUrl: boolean;
  apiUrl: string;
  deviceId: string;
  isSocketConnected: boolean;
  isNetConnected: boolean;
};
// export type ConfigReducer = Record<ConfigEnumType, boolean | String>;

export type SetConfigPayload = {
  isValidApiUrl?: boolean;
  apiUrl?: string;
};
// export type SetConfigPayload = Partial<{[K in ConfigEnumType]: boolean | String}>;

export type ConfigSettingsReducer = {
  showSettingsModal: boolean;
};

