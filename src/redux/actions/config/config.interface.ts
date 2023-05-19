export enum configEnum {
  isValidApiUrl = 'isValidApiUrl',
  apiUrl = 'apiUrl',
  showSettingsModal = 'showSettingsModal',
};

export type ConfigEnumType = configEnum.isValidApiUrl | configEnum.apiUrl | configEnum.showSettingsModal;

export interface ConfigReducer {
  isValidApiUrl: boolean;
  apiUrl: string;
  deviceId: string;
  isSocketConnected: boolean;
  isNetConnected: boolean;
};
// export type ConfigReducer = Record<ConfigEnumType, boolean | String>;

export type SetConfigPayload = Partial<{[K in ConfigEnumType]: boolean | String}>;

export type ConfigSettingsReducer = {
  showSettingsModal: boolean;
};

