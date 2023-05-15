export interface IAddress {
  country: string;
  city: string;
  address1: string;
  address2: string;
  postalCode: string;
};

export interface IUser {
  deviceId: Array<string>;
  email: string;
  userName: string;
  firstName:  string;
  lastName: string;
  gender: string;
  address: IAddress;
  roles: Array<string>;
  phone: string;
};

