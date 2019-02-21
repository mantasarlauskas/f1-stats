export const toggleLoading = () => ({
  type: 'TOGGLE_LOADING',
});

export const setDrivers = drivers => ({
  type: 'SET_DRIVERS',
  payload: drivers
});

export const setTeams = teams => ({
  type: 'SET_TEAMS',
  payload: teams
});

export const setDriverStandings = standings => ({
  type: 'SET_DRIVER_STANDINGS',
  payload: standings
});

export const setTeamStandings = standings => ({
  type: 'SET_TEAM_STANDINGS',
  payload: standings
});
