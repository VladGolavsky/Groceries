import { IProduct } from "src/interfaces/list.interface";

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
  list?: Array<IProduct>
};

export interface ISetTokenAction {
  accessToken: string;
  refreshToken: string;
};
