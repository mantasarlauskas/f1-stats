const initialState = {
  drivers: [],
  teams: [],
  driverStandings: [],
  teamStandings: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FINISH_LOADING':
      return {
        ...state,
        isLoading: false
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
