import { addTodo, toggleTodo } from "./action ";
import { v4 as uuid } from "uuid";

const initState = {
  count: 0,
  todo: [
    {
      title: "Hello world",
      status: false,
      id: uuid(),
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
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

export { reducer, initState };
