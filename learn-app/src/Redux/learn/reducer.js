import { Add, Toggle } from "./actionType.js";

// reducer

const reducer = (state, { type, payload }) => {
  switch (type) {
    case Add:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case Toggle:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === payload ? { ...item, status: !item.status } : item
        ),
      };
    default:
      return state;
  }
};

export { reducer };
