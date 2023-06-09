export const signIn = () => '/auth/signin';
export const signUp = () => '/auth/signup';
export const refresh = () => '/auth/refresh';

export const getList = () => '/list';
export const addToList = () => '/list/add';
export const removeFromList = (_id: string, excludeId: string) => `/list/delete?id=${_id}&excludeId=${excludeId}`;
export const updateProductStatus = () => '/list/status';
export const updateProductStatusAfterOfflie = () => '/list/sync';
