import axios from "axios";
import { BASE_URL, REQUEST_HEADER_AUTH_KEY, TOKEN_TYPE } from "../constants";


const BaseService = axios.create({
  timeout: 60000,
  baseURL: BASE_URL,
});

BaseService.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
    const persistData = deepParseJson(rawPersistData);

    const accessToken = persistData.auth.session.token;

    if (accessToken) {
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    console.log(response?.data?.message || "Something went wrong");
    return Promise.reject(error);
  }
);

export default BaseService;
