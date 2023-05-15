import { createAction } from "redux-act";
import { IAddToListAction } from "./list.interface";

export const getListAction = createAction("GET_LIST_ACTION");
export const setListAction = createAction('SET_LIST_ACTION');

export const addToListAction = createAction<IAddToListAction>("ADD_TO_LIST_ACTION");