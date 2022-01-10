const loadData = (key) => {
  const data = localStorage.getItem(key);
  const list = JSON.parse(data);
  return list;
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, saveData };
