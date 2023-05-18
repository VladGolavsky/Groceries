import { createAction } from "redux-act";
import { IAddToListAction, IRemoveFromListAction, IUpdateProductStatusAction, IUpdateProductStatusReduxWithoutAccountAction } from "./list.interface";
import { IProduct } from "src/interfaces/list.interface";

export const getListAction = createAction("GET_LIST_ACTION");
export const setListAction = createAction<Array<IProduct>>('SET_LIST_ACTION');

export const addToListAction = createAction<IAddToListAction>("ADD_TO_LIST_ACTION");
export const addToListReduxAction = createAction<IProduct>("ADD_TO_LIST_REDUX_ACTION");

export const removeFromListAction = createAction<IRemoveFromListAction>("REMOVE_FROM_LIST_ACTION");
export const removeFromListReduxAction = createAction<IRemoveFromListAction>("REMOVE_FROM_LIST_REDUX_ACTION");

export const updateProductStatusAction = createAction<IUpdateProductStatusAction>('UPDATE_PRODUCT_STATUS_ACTION');
export const updateProductStatusReduxAction = createAction<IProduct>('UPDATE_PRODUCT_STATUS_REDUX_ACTION');
export const updateProductStatusReduxWithoutAccountAction = createAction<IUpdateProductStatusReduxWithoutAccountAction>('UPDATE_PRODUCT_STATUS_REDUX_WITHOUT_ACCOUNT_ACTION')
