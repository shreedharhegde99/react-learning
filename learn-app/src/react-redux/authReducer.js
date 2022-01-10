import { login, logout } from "./action ";
import { loadData } from "./localStorage";

const initState = loadData("state")?.authReducer || { isAuth: false };
const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case login:
      return {
        ...state,
        isAuth: true,
      };
    case logout:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
export { authReducer };
