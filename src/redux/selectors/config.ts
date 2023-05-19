import { IRootState } from "..";

export const isValidApiUrlSelector = ((state: IRootState) => state.config.isValidApiUrl);
export const apiUrlSelector = ((state: IRootState) => state.config.apiUrl);
export const showSettingsModalSelector = ((state: IRootState) => state.configModal.showSettingsModal);
export const deviceIdSelector = ((state: IRootState) => state.config.deviceId);
export const socketConnectionStatusSelector = ((state: IRootState) => state.config.isSocketConnected);
export const isNetConnectedSelector = ((state: IRootState) => state.config.isNetConnected);
