import {
  GET_ALL_PROPERTIES,
  GET_PROPERTY,
  ADD_PROPERTY,
  EDIT_PROPERTY,
  DELETE_PROPERTY,
} from "../constants";
import { getApi, postApi, patchApi, deleteApi } from "../api";

export const getAllStocks = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await getApi("property");
        dispatch({
          type: GET_ALL_PROPERTIES,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const getProperty = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await getApi(`property/${id}`);
        dispatch({
          type: GET_PROPERTY,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const addProperty = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await postApi("property", data);
        dispatch({
          type: ADD_PROPERTY,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const editProperty = (id, data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await patchApi(`property/${id}`, data);
        dispatch({
          type: EDIT_PROPERTY,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const deleteProperty = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await deleteApi(`property/${id}`);
        dispatch({
          type: DELETE_PROPERTY,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};
