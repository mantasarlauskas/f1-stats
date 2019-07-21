import {
  getDriversFromAPI,
  getTeamsFromAPI,
  getTeamStandingsFromAPI,
  getDriverStandingsFromAPI
} from '../services/api';

export const FINISH_LOADING = 'FINISH_LOADING';
export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_TEAMS = 'SET_TEAMS';
export const SET_DRIVER_STANDINGS = 'SET_DRIVER_STANDINGS';
export const SET_TEAM_STANDINGS = 'SET_TEAM_STANDINGS';

const finishLoading = () => ({
  type: FINISH_LOADING
});

const setDrivers = drivers => ({
  type: SET_DRIVERS,
  payload: drivers
});

const setTeams = teams => ({
  type: SET_TEAMS,
  payload: teams
});

const setDriverStandings = standings => ({
  type: SET_DRIVER_STANDINGS,
  payload: standings
});

const setTeamStandings = standings => ({
  type: SET_TEAM_STANDINGS,
  payload: standings
});

const getDrivers = () => async (dispatch) => {
  const drivers = await getDriversFromAPI();
  dispatch(setDrivers(drivers));
};

const getTeams = () => async (dispatch) => {
  const teams = await getTeamsFromAPI();
  dispatch(setTeams(teams));
};

const getDriverStandings = () => async (dispatch) => {
  const driverStandings = await getDriverStandingsFromAPI();
  dispatch(setDriverStandings(driverStandings));
};

const getTeamStandings = () => async (dispatch) => {
  const teamStandings = await getTeamStandingsFromAPI();
  dispatch(setTeamStandings(teamStandings));
};

export default () => async (dispatch) => {
  await dispatch(getDrivers());
  await dispatch(getTeams());
  await dispatch(getDriverStandings());
  await dispatch(getTeamStandings());
  dispatch(finishLoading());
};
