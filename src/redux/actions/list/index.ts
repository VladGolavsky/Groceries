import { createAction } from "redux-act";
import { IAddToListAction } from "./list.interface";
import { IProduct } from "src/interfaces/list.interface";

export const getListAction = createAction("GET_LIST_ACTION");
export const setListAction = createAction<Array<IProduct>>('SET_LIST_ACTION');

export const addToListAction = createAction<IAddToListAction>("ADD_TO_LIST_ACTION");
export const addToListReduxAction = createAction<IProduct>("ADD_TO_LIST_REDUX_ACTION");