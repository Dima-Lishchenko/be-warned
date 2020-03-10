import axios from "axios";
import { BASE_URL } from "constants/api";

const REQUEST_TIMEOUT = 10000;
const TOKEN = "JWT_TOKEN";

export const getAuthToken = () => {
  const token = sessionStorage.getItem(TOKEN);
  return token ? `bearer ${token}` : null;
};

export const deleteAuthToken = () => sessionStorage.removeItem(TOKEN);

export const saveAuthToken = token => sessionStorage.setItem(TOKEN, token);

export const getErrorMessage = ({ response }) => response && response.data;

export const getInstance = () =>
  axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuthToken()
    }
  });

