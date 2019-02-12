const initialState = {
  drivers: [],
  teams: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRIVERS':
      return {
        ...state,
        drivers: action.payload
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