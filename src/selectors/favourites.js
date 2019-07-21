import { createSelector } from 'reselect';

const favouriteDrivers = ({ favourites: { drivers } }) => drivers;
const favouriteTeams = ({ favourites: { teams } }) => teams;
const idSelector = (state, id) => id;

export const favouriteDriverSelector = createSelector(
  favouriteDrivers,
  idSelector,
  (drivers, id) => drivers.find(driverId => driverId === id)
);

export const favouriteTeamSelector = createSelector(
  favouriteTeams,
  idSelector,
  (teams, id) => teams.find(constructorId => constructorId === id)
);
