export enum configEnum {
  isValidApiUrl = 'isValidApiUrl',
  apiUrl = 'apiUrl',
  showSettingsModal = 'showSettingsModal',
};

export type ConfigEnumType = configEnum.isValidApiUrl | configEnum.apiUrl | configEnum.showSettingsModal;

export interface ConfigReducer {
  isValidApiUrl: boolean;
  apiUrl: string;
  showSettingsModal: boolean;
};
// export type ConfigReducer = Record<ConfigEnumType, boolean | String>;

export type SetConfigPayload = Partial<{[K in ConfigEnumType]: boolean | String}>;
