import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  GET_USER,
  EDIT_USER,
} from "../constants";
import { getApi, postApi, patchApi } from "../api";

export const signupUser = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await postApi("user/signup", data);
        dispatch({
          type: REGISTER_USER,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await postApi("user/login", data);
        dispatch({
          type: LOGIN_USER,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await getApi(`user/${id}`);
        dispatch({
          type: GET_USER,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const editUser = (id, data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await patchApi(`user/${id}`, data);
        dispatch({
          type: EDIT_USER,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};
