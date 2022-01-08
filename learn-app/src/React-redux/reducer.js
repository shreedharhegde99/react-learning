import { add, reduce, addTodo, toggleTodo } from "./action";

const reducer = (state = 0, { type, payload }) => {
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
    default:
      return state;
  }
};

export { reducer };
