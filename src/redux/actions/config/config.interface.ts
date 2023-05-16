export enum configEnum {
  isValidApiUrl = 'isValidApiUrl',
  apiUrl = 'apiUrl',
};

export type ConfigEnumType = configEnum.isValidApiUrl | configEnum.apiUrl;

export type ConfigReducer = Record<ConfigEnumType, boolean | String>;

export type SetConfigPayload = Partial<{[K in ConfigEnumType]: boolean | String}>;
