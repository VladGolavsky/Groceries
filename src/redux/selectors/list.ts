import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IRootState } from "..";

const selectList = (state: IRootState) => state.list.list || [];

export const listSelector = createDraftSafeSelector(selectList, (list) => list);
export const cartListSelector = createDraftSafeSelector(selectList, (list) => list.filter(item => item.status));
