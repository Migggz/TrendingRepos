export const getToken = () => localStorage.getItem('trending_repos_token');

export const setToken = token => localStorage.setItem('trending_repos_token', token);