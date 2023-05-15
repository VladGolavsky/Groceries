import { IRootState } from "..";

export const accessTokenSelector = ((state: IRootState) => state.auth.accessToken);