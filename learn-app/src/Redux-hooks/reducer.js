import { add } from "./action";

const initState = {
  todo: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case add:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    default:
      return state;
  }
};

export { reducer };
