export const SHOW_ADDITIONAL_MENU = 'SHOW_ADDITIONAL_MENU';
export const HIDE_ADDITIONAL_MENU = 'HIDE_ADDITIONAL_MENU';

export const showAdditionalMenu = item => ({
  type: SHOW_ADDITIONAL_MENU,
  payload: item
});

export const hideAdditionalMenu = () => ({
  type: HIDE_ADDITIONAL_MENU
});
