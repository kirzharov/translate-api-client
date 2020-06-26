export const setTokenToLocalStorage = (token: string): void => localStorage.setItem('token', token);

export const getTokenFromLocalStorage = (): string => localStorage.getItem('token') || '';
