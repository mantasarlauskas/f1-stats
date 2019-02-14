import { createSelector } from 'reselect'

const driversSelector = ({ api: { drivers } }) => drivers;
const teamsSelector = ({ api: { teams } }) => teams;
const driversStandingsSelector = ({ api: { driverStandings } }) => driverStandings;
const idSelector = (state, id) => id;

export const driverSelector = createSelector(
  driversSelector, idSelector,
  (drivers, id) =>  drivers.find(({ driverId }) => driverId === id)
);

export const driverStandingsSelector = createSelector(
  driversStandingsSelector, idSelector,
  (standings, id) => standings.find(({ driverId }) => driverId === id)
);

export const teamSelector = createSelector(
  teamsSelector, driverStandingsSelector,
  (teams, standings) => teams.find(({ constructorId }) =>
    standings && constructorId === standings.constructorId
  )
);