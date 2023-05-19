import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";
import { IRootState } from "..";
import { StatusEnum } from "src/enums/list.enum";

export const listStateSelector = (state: IRootState) => state.list.list || [];
export const syncListStateSelector = (state: IRootState) => state.list.syncList || [];

export const mergedListStateSelector = createSelector(
  [listStateSelector, syncListStateSelector],
  (list, syncList) => {
    return list.map((item) => {
      const foundElem = syncList.find((syncItem) => syncItem._id === item._id);
      if (foundElem?._id) {
        return {
          ...item,
          status: foundElem.status,
        }
      }
  
      return item;
    }) || []
  }
)

export const listSelector = createSelector(mergedListStateSelector, (list) => list);
export const cartListSelector = createSelector(mergedListStateSelector, (list) => list.filter(item => item.status === StatusEnum.cart));
