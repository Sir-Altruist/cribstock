import { GET_ALL_STOCKS, GET_STOCK, SELL_STOCK, BUY_STOCK } from "../constants";
import { getApi, postApi } from "../api";

export const getAllStocks = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await getApi("stock");
        dispatch({
          type: GET_ALL_STOCKS,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const getStock = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await getApi(`stock/${id}`);
        dispatch({
          type: GET_STOCK,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const sellStock = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await postApi("order", data);
        dispatch({
          type: SELL_STOCK,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};

export const buyStock = (data) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        await postApi("sale", data);
        dispatch({
          type: BUY_STOCK,
        });
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  };
};
