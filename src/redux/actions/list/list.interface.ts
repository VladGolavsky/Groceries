import { StatusEnum } from "src/enums/list.enum";

export type IAddToListAction = { title: string };

export interface IRemoveFromListAction {
  _id: string;
};

export interface IUpdateProductStatusReduxWithoutAccountAction {
  _id: string;
  status: StatusEnum;
}

export interface IUpdateProductStatusAction {
  _id: string;
  status: StatusEnum;
  undoChanges?: () => void;
};