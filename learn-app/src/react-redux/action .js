import { v4 as uuid } from "uuid";
const addTodo = "ADD_TODO";
const toggleTodo = "TOGGLE_TODO";

const todo = (item) => ({
  type: addTodo,
  payload: {
    title: item,
    status: false,
    id: uuid(),
  },
});

const toggle = (payload) => ({
  type: toggleTodo,
  payload,
});
export { add, reduce, addTodo, toggleTodo };
export { increment, decrement, todo, toggle };
