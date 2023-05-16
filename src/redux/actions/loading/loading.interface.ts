export enum LoadingEnum { 
  'signIn' = 'signIn', 'signUp' = 'signUp', 'addToList' = 'addToList', 'fullApp' = 'fullApp' };

export type ILoadingReducer = Record<LoadingEnum, boolean>;

export type ISetLoadingAction = Partial<{[K in LoadingEnum]: boolean}>;
