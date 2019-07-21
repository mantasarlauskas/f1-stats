import storageClient from '../services/localStorage';

export const DRIVERS = 'DRIVERS';
export const TEAMS = 'TEAMS';
export const SET_FAVOURITE_DRIVERS = 'SET_FAVOURITE_DRIVERS';
export const SET_FAVOURITE_TEAMS = 'SET_FAVOURITE_TEAMS';

const setFavouriteDrivers = drivers => ({
  type: SET_FAVOURITE_DRIVERS,
  payload: drivers
});

const setFavouriteTeams = teams => ({
  type: SET_FAVOURITE_TEAMS,
  payload: teams
});

const getFavourites = () => async (dispatch) => {
  dispatch(setFavouriteDrivers(storageClient.get(DRIVERS)));
  dispatch(setFavouriteTeams(storageClient.get(TEAMS)));
};

export const addFavouriteDriver = driver => async (dispatch, getState) => {
  const {
    favourites: { drivers }
  } = getState();
  storageClient.set(DRIVERS, [...drivers, driver]);
  dispatch(getFavourites());
};

export const removeFavouriteDriver = driver => async (dispatch, getState) => {
  const {
    favourites: { drivers }
  } = getState();
  storageClient.set(DRIVERS, drivers.filter(id => id !== driver));
  dispatch(getFavourites());
};

export const addFavouriteTeam = team => async (dispatch, getState) => {
  const {
    favourites: { teams }
  } = getState();
  storageClient.set(TEAMS, [...teams, team]);
  dispatch(getFavourites());
};

export const removeFavouriteTeam = team => async (dispatch, getState) => {
  const {
    favourites: { teams }
  } = getState();
  storageClient.set(TEAMS, teams.filter(id => id !== team));
  dispatch(getFavourites());
};
