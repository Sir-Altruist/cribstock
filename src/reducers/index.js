import { combineReducers } from "redux";
import user from "./user";
import properties from "./properties";

export default combineReducers({
  user,
  properties,
});
