import { IRootState } from "..";

export const isValidApiUrlSelector = ((state: IRootState) => state.config.isValidApiUrl);
export const apiUrlSelector = ((state: IRootState) => state.config.apiUrl);
export const showSettingsModalSelector = ((state: IRootState) => state.config.showSettingsModal);
