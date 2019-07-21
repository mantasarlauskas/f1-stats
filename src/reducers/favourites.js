import { SET_FAVOURITE_DRIVERS, SET_FAVOURITE_TEAMS } from '../actions/favourites';

const initialState = {
  drivers: [],
  teams: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITE_DRIVERS:
      return {
        ...state,
        drivers: action.payload
      };
    case SET_FAVOURITE_TEAMS:
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
};
