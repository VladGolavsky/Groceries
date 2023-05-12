export enum LoadingEnum { 
  'signIn' = 'signIn', 'signUp' = 'signUp' };

export type ILoadingReducer = Record<LoadingEnum, boolean>;

export type ISetLoadingAction = Partial<{[K in LoadingEnum]: boolean}>;
