import axios from "axios";

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

export const FetchRequest = "FETCH_REQUEST";
export const FetchSuccess = "FETCH_SUCCESS";
export const FetchFailure = "FETCH_FAILURE";

const fetchUser = () => ({
  type: FetchRequest,
});

const fetchSuccecss = (payload) => ({
  type: FetchSuccess,
  payload,
});

const fetchFailure = (payload) => ({
  type: FetchFailure,
  payload,
});

export const fetchData = (payload) => (dispatch) => {
  dispatch(fetchUser());
  return axios
    .get("https://api.github.com/search/users", {
      params: { q: payload },
    })
    .then((res) => res.data.items)
    .then((res) => dispatch(fetchSuccecss(res)))
    .catch((err) => dispatch(fetchFailure(err)));
};

export { add, reduce, increment, decrement };
