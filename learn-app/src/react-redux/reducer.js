import { addTodo, toggleTodo, deletion, add, reduce } from "./action ";
import { loadData } from "./localStorage";

const initState = loadData("state")?.reducer || {
  count: 0,
  todo: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case add:
      return { ...state, count: state.count + 1 };
    case reduce:
      return {
        ...state,
        count: state.count - 1,
      };
    case addTodo:
      return {
        ...state,
        todo: [...state.todo, payload],
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
