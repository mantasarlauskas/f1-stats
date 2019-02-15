const initialState = {
  drivers: [],
  teams: [],
  driverStandings: [],
  teamStandings: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case 'SET_DRIVERS':
      return {
        ...state,
        drivers: action.payload
      };
    case 'SET_DRIVER_STANDINGS':
      return {
        ...state,
        driverStandings: action.payload
      };
    case 'SET_TEAMS':
      return {
        ...state,
        teams: action.payload
      };
    case 'SET_TEAM_STANDINGS':
      return {
        ...state,
        teamStandings: action.payload
      };
    default:
      return state;
  }
};