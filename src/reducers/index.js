import { combineReducers } from "redux";
import user from "./user";
import properties from "./properties";
import { reducer as form } from "redux-form";

export default combineReducers({
  form,
  user,
  properties,
});
