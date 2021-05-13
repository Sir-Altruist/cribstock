import { LOGIN_USER, LOGOUT_USER } from "../constants";

export default function user(state = { loggedIn: true }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
