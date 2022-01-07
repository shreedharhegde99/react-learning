import { Add, Toggle } from "./actionType.js";

const addTodo = (payload) => {
  return {
    type: Add,
    payload: {
      title: payload,
      status: false,
    },
  };
};

const toggleTodo = (payload) => {
  return {
    type: Toggle,
    payload,
  };
};

export { addTodo, toggleTodo };
