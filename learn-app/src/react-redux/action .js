import { v4 as uuid } from "uuid";
const addTodo = "ADD_TODO";
const toggleTodo = "TOGGLE_TODO";
const deletion = "DELETE";

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

const remove = (payload) => ({
  type: deletion,
  payload,
});
export { addTodo, toggleTodo, deletion };
export { todo, toggle, remove };
