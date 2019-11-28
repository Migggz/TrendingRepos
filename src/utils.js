export const getToken = () => localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);
export const removeToken = () => localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN);
export const setToken = token => localStorage.setItem(process.env.REACT_APP_LOCALSTORAGE_TOKEN, token);
