export enum ErrorEnum { 
  'signIn' = 'signIn', 'signUp' = 'signUp' };

export type IErrorReducer = Record<ErrorEnum, string>;

export type ISetErrorAction = Partial<{[K in ErrorEnum]: string}>;
