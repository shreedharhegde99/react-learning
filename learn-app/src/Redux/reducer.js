import { add, reduce, increment, decrement } from "./action";

const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case add:
      return state + payload;
    case reduce:
      return state - payload;
    default:
      return state;
  }
};
export { reducer };
