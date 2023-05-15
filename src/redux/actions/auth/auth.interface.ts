export interface ISignInAction {
  email: string;
  password: string;
  deviceId: string;
};

export interface ISignUpAction {
  email: string;
  userName: string;
  deviceId: string;
  password: string;
};

export interface ISetTokenAction {
  accessToken: string;
  refreshToken: string;
};
