import axios from "axios";

const config = {
  headers: {
    Accept: "application/json"
  }
};

const instance = axios.create(config);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export type Get = (url: string, param?: string) => Promise<any>;

export const get: Get = (url, param) => {
  let processedUrl = param ? `${url}/${param}` : url;

  return instance.get(processedUrl);
};
