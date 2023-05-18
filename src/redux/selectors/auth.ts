import { IRootState } from "..";

export const accessTokenSelector = ((state: IRootState) => state.auth.accessToken);
export const usingWithoutAccountSelector = ((state: IRootState) => state.auth.usingWithoutAccount);
