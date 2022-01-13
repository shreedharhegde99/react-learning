import {
  add,
  reduce,
  increment,
  decrement,
  FetchRequest,
  FetchSuccess,
  FetchFailure,
} from "./action";

const init = {
  isLoading: false,
  iserror: false,
  userData: [],
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case add:
      return state + payload;
    case reduce:
      return state - payload;
    case FetchRequest:
      return {
        ...state,
        isLoading: true,
        iserror: false,
      };

    case FetchSuccess:
      return {
        ...state,
        isLoading: false,
        userData: payload,
      };
    case FetchFailure:
      return {
        ...state,
        isLoading: false,
        iserror: true,
      };
    default:
      return state;
  }
};
export { reducer };
