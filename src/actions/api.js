export const FINISH_LOADING = 'FINISH_LOADING';
export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_TEAMS = 'SET_TEAMS';
export const SET_DRIVER_STANDINGS = 'SET_DRIVER_STANDINGS';
export const SET_TEAM_STANDINGS = 'SET_TEAM_STANDINGS';

export const finishLoading = () => ({
  type: FINISH_LOADING
});

export const setDrivers = drivers => ({
  type: SET_DRIVERS,
  payload: drivers
});

export const setTeams = teams => ({
  type: SET_TEAMS,
  payload: teams
});

export const setDriverStandings = standings => ({
  type: SET_DRIVER_STANDINGS,
  payload: standings
});

export const setTeamStandings = standings => ({
  type: SET_TEAM_STANDINGS,
  payload: standings
});
