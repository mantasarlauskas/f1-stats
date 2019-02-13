const initialState = {
  drivers: [],
  teams: [],
  standings: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        drivers: action.payload
      };
    case 'SET_STANDINGS':
      return {
        ...state,
        standings: action.payload
      };
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      };
    default:
      return state;
  }
};