import { StatusEnum } from "src/enums/list.enum";

export interface IPruductDetails {
  _id: string;
  title: string;
};

export interface IProduct {
  _id: string;
  productDetails: IPruductDetails;
  productId: string;
  status: StatusEnum;
  uId: string;
};
