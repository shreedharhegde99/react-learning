import { addTodo, toggleTodo, deletion } from "./action ";
import { loadData } from "../localStorage/localStorage";

const initState = loadData("state") || {
  count: 0,
  todo: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case addTodo:
      return {
        ...state,
        todo: [...state?.todo, payload],
      };

    case toggleTodo:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === payload ? { ...item, status: !item.status } : item
        ),
      };

    case deletion:
      return {
        ...state,
        todo: state.todo.filter((item) => (item.id !== payload ? item : "")),
      };
    default:
      return state;
  }
};

export { reducer, initState };
