import axios from "axios";
import { ENVIRONMENT, API_URL } from "./config";

const BASE_URL =
  ENVIRONMENT === "production" ? API_URL : "http://localhost:3000";

const headers = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
};

export const getApi = async (url) => {
  const response = await axios({
    method: "GET",
    url: `${BASE_URL}/${url}`,
    headers,
  });

  return response;
};

export const postApi = async (url, data) => {
  const response = await axios({
    method: "POST",
    url: `${BASE_URL}/${url}`,
    headers,
    data,
  });

  return response;
};

export const patchApi = async (url, data) => {
  const response = await axios({
    method: "PATCH",
    url: `${BASE_URL}/${url}`,
    headers,
    data,
  });

  return response;
};

export const deleteApi = async (url) => {
  const response = await axios({
    method: "DELETE",
    url: `${BASE_URL}/${url}`,
    headers,
  });

  return response;
};
