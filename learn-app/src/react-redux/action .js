import { v4 as uuid } from "uuid";



const add = "ADD";
const reduce = "REDUCE";
const addTodo = "ADD_TODO";
const toggleTodo = "TOGGLE_TODO";
const deletion = "DELETE";
const login = "LOGIN";
const logout = "LOGOUT";

const increment = (payload) => {
  return {
    type: add,
    payload,
  };
};

const decrement = (payload) => ({
  type: reduce,
  payload,
});

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

const auth = (payload) => ({
  type: login,
  payload,
});
const unAuth = (payload) => ({
  type: logout,
  payload,
});

export { add, reduce, addTodo, toggleTodo, deletion, login, logout };
export { todo, toggle, remove, auth, unAuth, increment, decrement };
