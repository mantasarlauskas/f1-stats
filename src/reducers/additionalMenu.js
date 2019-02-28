export default (state = '', action) => {
  switch (action.type) {
    case 'SHOW_ADDITIONAL_MENU':
      return action.payload;
    case 'HIDE_ADDITIONAL_MENU':
      return '';
    default:
      return state;
  }
};
