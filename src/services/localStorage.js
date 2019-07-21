export default {
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  get: (key) => {
    const state = localStorage.getItem(key);
    if (state === null) {
      return [];
    }
    return JSON.parse(state);
  }
};
