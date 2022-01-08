const add = "ADD";
const reduce = "REDUCE";

const increment = (payload) => {
  return {
    type: add,
    payload,
  };
};

const decrement = (payload) => {
  return {
    type: reduce,
    payload,
  };
};

export { add, reduce, increment, decrement };
